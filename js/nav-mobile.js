/* ─────────────────────────────────────────
   NAVIGATION MOBILE, Barre inférieure
───────────────────────────────────────── */
(function() {
  var ROLE_SCREENS = {
    pilote:    { screen: 'pilote', icon: '📊', label: 'Tableau' },
    batisseur: { screen: 'quete',  icon: '⚡', label: 'Quêtes'  },
    semeur:    { screen: 'semeur', icon: '📋', label: 'RSE'     }
  };

  function getActiveScreen() {
    var el = document.querySelector('.screen.active');
    return el ? el.id.replace('screen-', '') : 'carte';
  }

  function renderMobNav() {
    var nav = document.getElementById('mob-nav');
    if (!nav) return;
    var role = (typeof currentRole !== 'undefined' ? currentRole : null) || 'pilote';
    var rs = ROLE_SCREENS[role] || ROLE_SCREENS.pilote;
    var active = getActiveScreen();
    var items = [
      { screen: 'carte',       icon: '🗺',    label: 'Carte'  },
      { screen: rs.screen,     icon: rs.icon, label: rs.label },
      { screen: 'bdd',         icon: '📚',    label: 'Biblio' },
      { screen: 'marketplace', icon: '🛖',    label: 'Marché' },
      { deva: true,            icon: '✦',     label: 'Deva'   }
    ];
    nav.innerHTML = items.map(function(item) {
      if (item.deva) {
        return '<button class="mob-btn mob-deva" onclick="devaToggleChat()" aria-label="Ouvrir Deva">'
          + '<span class="mob-btn-icon">' + item.icon + '</span>' + item.label + '</button>';
      }
      var cls = 'mob-btn' + (item.screen === active ? ' active' : '');
      return '<button class="' + cls + '" onclick="showScreen(\'' + item.screen + '\')" aria-label="' + item.label + '">'
        + '<span class="mob-btn-icon">' + item.icon + '</span>' + item.label + '</button>';
    }).join('');
  }

  document.addEventListener('DOMContentLoaded', function() {
    var nav = document.createElement('div');
    nav.id = 'mob-nav';
    document.body.appendChild(nav);

    /* Patch showScreen → met à jour la nav */
    var _show = window.showScreen;
    window.showScreen = function(id) { _show(id); renderMobNav(); };

    renderMobNav();
  });
})();
