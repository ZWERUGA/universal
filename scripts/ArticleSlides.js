class ArticleSlides {
  selectors = {
    root: "[data-js-slides-container]",
    inner: "[data-js-slides-inner]",
    button: "[data-js-slides-button]",
  };

  constructor() {
    this.rootElement = document.querySelector(this.selectors.root);
    this.innerElement = this.rootElement.querySelector(this.selectors.inner);
    this.buttons = this.rootElement.querySelectorAll(this.selectors.button);
    this.activeButton = this.buttons[0];
    this.slideIndex = 0;
    
    this.interval = this.activateInterval();

    this.bindEvents();
  }

  activateInterval = () => {
    return setInterval(() => {
      console.log("Interval");
      this.changeIndex(this.slideIndex + 1);
      this.changeSlide();
    }, 5000);
  };

  changeIndex = (index) => {
    if (index > this.buttons.length - 1) {
      this.slideIndex = 0;
      return;
    }

    this.slideIndex = index;
  };

  changeActiveButton = () => {
    this.activeButton.innerHTML = `
    <svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
      <circle cx="10" cy="10" r="4" fill="#d9dadb" />
    </svg>
  `;

    this.activeButton = this.buttons[this.slideIndex];

    this.activeButton.innerHTML = `
    <svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
      <circle cx="10" cy="10" r="4" fill="#d9dadb" />
      <circle class="animated-ring" cx="10" cy="10" r="9" fill="none" stroke="#ffffff" stroke-width="2" stroke-dasharray="56.52, 56.52" stroke-dashoffset="56.52">
        <animate attributeName="stroke-dashoffset" from="56.52" to="0" dur="5s" repeatCount="1" />
      </circle>
    </svg>
  `;
  };

  changeActiveSlide = () => {
    const innerWidth = this.innerElement.clientWidth;
    this.innerElement.style.transform = `translateX(-${innerWidth * this.slideIndex}px)`;
  };

  changeSlide = () => {
    this.changeActiveButton(this.slideIndex);
    this.changeActiveSlide(this.slideIndex);
  };

  onButtonClick = (index) => {
    clearInterval(this.interval);
    this.interval = this.activateInterval();
    this.changeIndex(index);
    this.changeSlide();
  };

  bindEvents() {
    this.buttons.forEach((button, index) => {
      button.addEventListener("click", () => this.onButtonClick(index));
    });
  }
}

export default ArticleSlides;
