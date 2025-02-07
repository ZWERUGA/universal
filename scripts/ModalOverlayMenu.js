class ModalOverlayMenu {
  selectors = {
    burgerButton: "[data-js-burger-button]",
    modalOverlay: "[data-js-modal-overlay-menu]",
    modalOverlayInnerMenu: "[data-js-modal-overlay-inner-menu]",
    modalCloseButton: "[data-js-modal-overlay-close]",
    modalLink: ".modal-overlay__link",
  };

  stateClasses = {
    modalOverlayIsActive: "modal-overlay--is-active",
    modalOverlayInnerIsActive: "modal-overlay__inner-menu--is-active",
    modalOpen: "modal-open",
  };

  constructor() {
    this.burgerButtonElement = document.querySelector(this.selectors.burgerButton);
    this.modalOverlayElement = document.querySelector(this.selectors.modalOverlay);
    this.modalOverlayInnerElement = document.querySelector(this.selectors.modalOverlayInnerMenu);
    this.modalCloseButtonElement = this.modalOverlayInnerElement.querySelector(
      this.selectors.modalCloseButton
    );
    this.modalLinks = this.modalOverlayElement.querySelectorAll(this.selectors.modalLink);
    this.bodyElement = document.querySelector("body");
    this.bindEvents();
  }

  modalOpen = () => {
    this.modalOverlayElement.classList.add(this.stateClasses.modalOverlayIsActive);
    this.modalOverlayInnerElement.classList.add(this.stateClasses.modalOverlayInnerIsActive);
    this.bodyElement.classList.add(this.stateClasses.modalOpen);
  };

  modalClose = () => {
    this.modalOverlayElement.classList.remove(this.stateClasses.modalOverlayIsActive);
    this.modalOverlayInnerElement.classList.remove(this.stateClasses.modalOverlayInnerIsActive);
    this.bodyElement.classList.remove(this.stateClasses.modalOpen);
  };

  onModalLinkClick = () => {
    this.modalClose();
  };

  bindEvents() {
    this.burgerButtonElement.addEventListener("click", this.modalOpen);
    this.modalCloseButtonElement.addEventListener("click", this.modalClose);

    this.modalLinks.forEach((modalLink) => {
      modalLink.addEventListener("click", this.onModalLinkClick);
    });
  }
}

export default ModalOverlayMenu;
