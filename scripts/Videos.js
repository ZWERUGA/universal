const rootSelector = "[data-js-videos]";
const videoSlideSelector = "[data-js-videos-slide]";

class Videos {
  selectors = {
    root: rootSelector,
    button: "[data-js-videos-button]",
    overlay: "[data-js-videos-overlay]",
    video: "[data-js-videos-video]",
  };

  stateClasses = {
    isHidden: "overlay--is-hidden",
    isPlaying: "news__recommended-video--is-playing",
  };

  constructor(rootElement) {
    this.rootElement = rootElement;
    this.videoElement = this.rootElement.querySelector(this.selectors.video);
    this.overlayElement = this.rootElement.querySelector(this.selectors.overlay);
    this.buttonElement = this.rootElement.querySelector(this.selectors.button);
    this.bindEvents();
  }

  onButtonVideoClick = () => {
    this.videoElement.setAttribute("controls", "");
    this.videoElement.classList.add(this.stateClasses.isPlaying);
    this.toggleOverlayClassList();

    this.videoElement.play();
  };

  toggleOverlayClassList = () => {
    this.overlayElement.classList.toggle(this.stateClasses.isHidden);
  };

  onVideoEnded = () => {
    this.videoElement.src = this.videoElement.src;
    this.videoElement.removeAttribute("controls");
    this.videoElement.classList.remove(this.stateClasses.isPlaying);
    this.toggleOverlayClassList();
  };

  bindEvents() {
    this.buttonElement.addEventListener("click", this.onButtonVideoClick);
    this.videoElement.addEventListener("ended", this.onVideoEnded);
  }
}

class VideosCollection {
  constructor() {
    this.init();
  }

  init() {
    const videos = document.querySelector(rootSelector);

    videos.querySelectorAll(videoSlideSelector).forEach((video) => {
      new Videos(video);
    });
  }
}

export default VideosCollection;
