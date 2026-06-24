/* ─────────────────────────────────────────────────────────────────────────
   EVAD · store.js — couche d'accès aux données, PRÊTE POUR SUPABASE.

   Aujourd'hui : tout est persisté en localStorage avec la forme exacte des
   futures tables. Demain : on remplace l'implémentation interne de ce module
   par des appels Supabase ; l'API publique (window.store) reste identique, donc
   le reste de l'app ne change pas et on ne « recommence pas les tables ».

   API générique (1:1 avec Supabase : from(table).insert/.update/.select/...):
     store.all(table)              -> []                 (select *)
     store.get(table, id)          -> row | null         (select … where id)
     store.where(table, pred)      -> []                 (select … where …)
     store.insert(table, obj)      -> row (id+timestamps)
     store.update(table, id, patch)-> row | null
     store.upsert(table, obj)      -> row
     store.remove(table, id)       -> void
     store.clearTable(table)       -> void

   Brouillons de fiches en cours (1 par type : 'lieu' | 'batisseur' | 'semeur') :
     store.saveDraft(kind, data) / store.loadDraft(kind) / store.clearDraft(kind)

   Tables cibles (le schéma) : voir store.TABLES.
   ───────────────────────────────────────────────────────────────────────── */
(function (global) {
  'use strict';

  var NS = 'evad';
  var VERSION = 1;                              // bump = migration de schéma
  function keyOf(table) { return NS + ':v' + VERSION + ':' + table; }
  function draftKey(kind) { return NS + ':v' + VERSION + ':draft:' + kind; }

  // Schéma cible : ces collections deviendront les tables Supabase.
  var TABLES = [
    'lieux',          // porteurs de lieu (Pilote)
    'batisseurs',     // contributeurs
    'semeurs',        // financeurs
    'quetes',         // missions rattachées à un lieu/solution
    'candidatures',   // jointure batisseur × quete
    'financements',   // jointure semeur × quete/projet
    'graines_tx',     // mouvements de graines (gain / dépense)
    'offres_mkt',     // offres marketplace (pilote / semeur)
    'reseau_posts',   // fil du réseau
  ];

  function uuid() {
    if (global.crypto && typeof global.crypto.randomUUID === 'function') {
      return global.crypto.randomUUID();
    }
    return 'id-' + Date.now().toString(36) + '-' + Math.random().toString(36).slice(2, 10);
  }
  function nowISO() { return new Date().toISOString(); }

  function read(table) {
    try { return JSON.parse(global.localStorage.getItem(keyOf(table)) || '[]') || []; }
    catch (e) { return []; }
  }
  function write(table, rows) {
    try { global.localStorage.setItem(keyOf(table), JSON.stringify(rows)); return true; }
    catch (e) { return false; }
  }

  var store = {
    uuid: uuid,
    now: nowISO,
    TABLES: TABLES,

    all: function (table) { return read(table); },

    get: function (table, id) {
      var rows = read(table);
      for (var i = 0; i < rows.length; i++) if (rows[i].id === id) return rows[i];
      return null;
    },

    where: function (table, pred) { return read(table).filter(pred); },

    insert: function (table, obj) {
      var rows = read(table);
      var row = Object.assign({}, obj);
      if (!row.id) row.id = uuid();
      if (!row.created_at) row.created_at = nowISO();
      row.updated_at = nowISO();
      rows.push(row);
      write(table, rows);
      return row;
    },

    update: function (table, id, patch) {
      var rows = read(table);
      for (var i = 0; i < rows.length; i++) {
        if (rows[i].id === id) {
          rows[i] = Object.assign({}, rows[i], patch, { id: id, updated_at: nowISO() });
          write(table, rows);
          return rows[i];
        }
      }
      return null;
    },

    upsert: function (table, obj) {
      if (obj && obj.id && store.get(table, obj.id)) return store.update(table, obj.id, obj);
      return store.insert(table, obj);
    },

    remove: function (table, id) {
      write(table, read(table).filter(function (r) { return r.id !== id; }));
    },

    clearTable: function (table) { write(table, []); },

    // ── Brouillons (fiche en cours, non publiée) ──
    saveDraft: function (kind, data) {
      try {
        global.localStorage.setItem(draftKey(kind), JSON.stringify({ data: data, updated_at: nowISO() }));
        return true;
      } catch (e) { return false; }
    },
    loadDraft: function (kind) {
      try {
        var raw = JSON.parse(global.localStorage.getItem(draftKey(kind)) || 'null');
        return raw ? raw.data : null;
      } catch (e) { return null; }
    },
    clearDraft: function (kind) {
      try { global.localStorage.removeItem(draftKey(kind)); } catch (e) {}
    },

    // ── Debug ──
    _dump: function () {
      var out = {};
      TABLES.forEach(function (t) { out[t] = read(t); });
      return out;
    },
    _reset: function () {
      TABLES.forEach(function (t) { write(t, []); });
      ['lieu', 'batisseur', 'semeur'].forEach(function (k) { store.clearDraft(k); });
    },
  };

  global.store = store;
  global.EvadStore = store;   // alias
})(window);
