class Tabs {
  attributes = {
    root: "data-js-tabs-buttons",
    active: "data-js-active-tab-button",
  };

  selectors = {
    root: `[${this.attributes.root}]`,
    active: `[${this.attributes.active}]`,
  };

  stateClasses = {
    isActive: "tabs__button--is-active",
  };

  constructor() {
    this.rootElement = document.querySelector(this.selectors.root);
    this.bindEvents();
  }

  onTabButtonClick = (event) => {
    const target = event.target.closest("a");

    if (!target || !this.rootElement.contains(target)) return;

    const activeTabButton = this.rootElement.querySelector(this.selectors.active);
    activeTabButton.classList.remove(this.stateClasses.isActive);
    activeTabButton.removeAttribute(this.attributes.active);

    target.classList.add(this.stateClasses.isActive);
    target.setAttribute(this.attributes.active, "");
  };

  bindEvents() {
    this.rootElement.addEventListener("click", this.onTabButtonClick);
  }
}

export default Tabs;
