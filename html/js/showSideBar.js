function toggleMenu() {
  // Trova gli elementi nel DOM
  const sidebarMenu = document.getElementById('sidebar-menu');
  const overlay = document.getElementById('overlay');

  // Verifica se gli elementi esistono
  if (!sidebarMenu || !overlay) {
    console.error('Elemento non trovato: controlla gli ID sidebar-menu o overlay.');
    return;
  }

  // Aggiunge o rimuove la classe 'active'
  const isMenuActive = sidebarMenu.classList.toggle('active');

  // Mostra o nasconde l'overlay
  overlay.classList.toggle('show', isMenuActive);
}