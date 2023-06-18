(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-modal-open]'),
    closeModalBtn: document.querySelector('[data-modal-close]'),
    modal: document.querySelector('[data-modal]'),
  };

  refs.openModalBtn.addEventListener('click', openModal);
  refs.closeModalBtn.addEventListener('click', closeModal);
  refs.modal.addEventListener('click', handleModalClick);

  function openModal() {
    refs.modal.classList.remove('is-hidden');
    document.body.classList.add('modal-open');
  }

  function closeModal() {
    refs.modal.classList.add('is-hidden');
    document.body.classList.remove('modal-open');
  }

  function handleModalClick(event) {
    if (event.target === refs.modal) {
      closeModal();
    }
  }

  document.addEventListener('keydown', event => {
    if (event.key === 'Escape') {
      closeModal();
    }
  });
})();
