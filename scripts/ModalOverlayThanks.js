class ModalOverlayThanks {
  selectors = {
    modalOverlay: "[data-js-modal-overlay-thanks]",
    modalOverlayInnerThanks: "[data-js-modal-overlay-inner-thanks]",
    modalCloseButton: "[data-js-modal-overlay-close]",
    subscribeForm: ".subscribe-form",
    button: "button",
  };

  stateClasses = {
    modalOverlayIsActive: "modal-overlay--is-active",
    modalOverlayInnerIsActive: "modal-overlay__inner-thanks--is-active",
    modalOpen: "modal-open",
  };

  constructor() {
    this.modalOverlayElement = document.querySelector(this.selectors.modalOverlay);
    this.modalOverlayInnerElement = this.modalOverlayElement.querySelector(
      this.selectors.modalOverlayInnerThanks
    );
    this.modalCloseButtonElement = this.modalOverlayInnerElement.querySelector(
      this.selectors.modalCloseButton
    );
    this.bodyElement = document.querySelector("body");
    this.subscribeFormElement = document.querySelector(this.selectors.subscribeForm);
    this.button = this.subscribeFormElement.querySelector(this.selectors.button);
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
    this.modalCloseButtonElement.addEventListener("click", this.modalClose);
    this.subscribeFormElement.addEventListener("submit", (e) => {
      e.preventDefault();

      this.subscribeFormElement.classList.add("button--is-loading");

      setTimeout(() => {
        this.subscribeFormElement.classList.remove("button--is-loading");

        this.modalOpen();
        this.subscribeFormElement.reset();
      }, 2000);
    });
  }
}

export default ModalOverlayThanks;
