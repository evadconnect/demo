const NC_APPS = [
  {ic:'📁', l:'Fichiers',  bg:'#dbe6f0', d:'Stocke, partage et synchronise tous tes documents.'},
  {ic:'📅', l:'Agenda',    bg:'#f5e3dc', d:'Planifie réunions, échéances et événements partagés.'},
  {ic:'👥', l:'Contacts',  bg:'#e4e3ec', d:'Centralise les coordonnées de tes membres et partenaires.'},
  {ic:'💬', l:'Talk',      bg:'#dceae6', d:'Messagerie, appels et visioconférences chiffrés.'},
  {ic:'✅', l:'Tâches',    bg:'#e3eedd', d:'Suis tes listes de tâches, échéances et rappels.'},
  {ic:'📋', l:'Deck',      bg:'#f3dee0', d:'Organise tes tâches en tableaux Kanban par projet.'},
  {ic:'🧮', l:'Tableaux',  bg:'#dfe9ef', d:'Crée et gère des tableaux de données personnalisés.'},
  {ic:'📝', l:'Notes',     bg:'#dcebe7', d:'Prends des notes rapides, synchronisées partout.'},
  {ic:'🗂️', l:'Office',    bg:'#f6e6d3', d:'Édite documents, tableurs et présentations à plusieurs.'},
  {ic:'🔐', l:'Coffre',    bg:'#f4ebcf', d:'Garde tes mots de passe et données sensibles en sécurité.'},
  {ic:'📊', l:'Forms',     bg:'#e1e6ec', d:'Crée questionnaires et sondages, collecte les réponses.'},
  {ic:'⚙️', l:'Réglages',  bg:'#e6e4e2', d:'Configure ton compte, la sécurité et les préférences.'},
];
function renderNcApps(){
  const grid = document.getElementById('nc-apps-grid');
  if(!grid) return;
  grid.innerHTML = NC_APPS.map(a=>`
    <a href="https://compte.evad.org" target="_blank" rel="noopener" class="nc-tile" style="background:white;border:1px solid rgba(46,102,66,.1);border-radius:16px;padding:1.1rem .85rem;display:flex;flex-direction:column;align-items:center;text-align:center;gap:.5rem;text-decoration:none;transition:box-shadow .15s,transform .15s" onmouseover="this.style.boxShadow='0 6px 18px rgba(46,102,66,.12)';this.style.transform='translateY(-2px)'" onmouseout="this.style.boxShadow='';this.style.transform=''">
      <div style="width:56px;height:56px;border-radius:50%;background:${a.bg};display:flex;align-items:center;justify-content:center;font-size:1.55rem">${a.ic}</div>
      <div style="font-size:.8rem;font-weight:700;color:var(--ink)">${a.l}</div>
      <div style="font-size:.64rem;color:var(--moss);opacity:.72;line-height:1.4">${a.d}</div>
    </a>`).join('');
}
renderNcApps();
