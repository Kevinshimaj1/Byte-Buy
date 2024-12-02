function toggleMenu() {
  const aside = document.querySelector('aside[aria-label="Navigazione laterale"]');
  const overlay = document.querySelector('section[onclick="toggleMenu()"]');

  const isVisible = aside.getAttribute('data-visible') === 'true';

  aside.setAttribute('data-visible', !isVisible);
  overlay.setAttribute('data-visible', !isVisible);
}