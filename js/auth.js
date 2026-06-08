let _authSelectedRole = null;
let _authMode = 'login'; // 'login' | 'signup'

function openAuthModal(){
  _authMode = 'login';
  document.getElementById('auth-profil-title').textContent = 'Choisir un profil';
  document.getElementById('auth-profil-sub').textContent = 'Sélectionne ton rôle EVAD avant de te connecter.';
  const m=document.getElementById('auth-profil-modal');
  m.style.display='flex';
}

// Désactivé en démo : pas de modal « Créer un compte ».
function openSignupModal(){ /* no-op (démo) */ }

function authSubmit(){
  closeAuthModal();
  const roleMap = { pilote:'lieu', batisseur:'batisseur', semeur:'semeur' };
  showScreen(roleMap[_authSelectedRole] || 'batisseur');
}

function selectAuthProfil(role,ic,name,desc){
  _authSelectedRole = role;
  document.getElementById('auth-profil-modal').style.display='none';
  if (_authMode === 'signup') {
    splashRole = role;
    // L'overlay est dans #evad-splash : le rendre visible (transparent) pour que l'overlay puisse s'afficher
    const splash = document.getElementById('evad-splash');
    splash.classList.remove('hidden');
    splash.style.opacity = '0';
    splash.style.pointerEvents = 'none';
    splash.style.display = 'flex';
    splashEnter();
  } else {
    const badge = document.getElementById('auth-role-badge');
    badge.innerHTML = ic + ' ' + name.toUpperCase();
    // Couleur du badge selon le rôle
    const roleColors = {
      pilote:    { bg: 'rgba(46,107,71,.12)',   color: '#2e6b47' },
      batisseur: { bg: 'rgba(240,176,50,.18)',  color: '#a06c00' },
      semeur:    { bg: 'rgba(59,130,180,.14)',  color: '#2563a8' }
    };
    const c = roleColors[role] || roleColors.pilote;
    badge.style.background = c.bg;
    badge.style.color = c.color;
    document.getElementById('auth-connexion-modal').style.display='flex';
  }
}

function closeAuthModal(){
  document.getElementById('auth-profil-modal').style.display='none';
  document.getElementById('auth-connexion-modal').style.display='none';
}
document.getElementById('auth-profil-modal').addEventListener('click',function(e){if(e.target===this)closeAuthModal();});
document.getElementById('auth-connexion-modal').addEventListener('click',function(e){if(e.target===this)closeAuthModal();});
