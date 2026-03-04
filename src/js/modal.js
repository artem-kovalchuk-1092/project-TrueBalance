document.addEventListener('click', e => {
  const openBtn = e.target.closest(
    '[data-modal-low-open], [data-modal-middle-open], [data-modal-top-open], [data-modal-menu-open]'
  );
  const closeBtn = e.target.closest(
    '[data-modal-low-close], [data-modal-middle-close], [data-modal-top-close], [data-modal-menu-close]'
  );

  if (openBtn) {
    const modal = document.querySelector(
      `[data-modal-${openBtn.dataset.modalLowOpen !== undefined ? 'low' : openBtn.dataset.modalMiddleOpen !== undefined ? 'middle' : openBtn.dataset.modalTopOpen !== undefined ? 'top' : 'menu'}]`
    );
    modal.classList.add('is-open');
    document.body.classList.add('no-scroll');
  }

  if (closeBtn) {
    const modal = document.querySelector(
      `[data-modal-${closeBtn.dataset.modalLowClose !== undefined ? 'low' : closeBtn.dataset.modalMiddleClose !== undefined ? 'middle' : closeBtn.dataset.modalTopClose !== undefined ? 'top' : 'menu'}]`
    );
    modal.classList.remove('is-open');
    document.body.classList.remove('no-scroll');
  }
  const mobileMenuLinks = e.target.closest(
    '.mobile-navigation-link, .mobile-link-btn'
  );
  if (mobileMenuLinks) {
    const mobileMenu = document.querySelector('[data-modal-menu]');
    if (mobileMenu) {
      mobileMenu.classList.remove('is-open');
      document.body.classList.remove('no-scroll');
    }
  }
});
