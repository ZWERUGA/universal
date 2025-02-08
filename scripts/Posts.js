class Posts {
  selectors = {
    root: "[data-js-posts-main-list]",
    bookmark: "[data-js-post-card-bookmark]",
  };

  stateClasses = {
    isActive: "post-card__bookmark--is-active",
  };

  constructor() {
    this.rootElement = document.querySelector(this.selectors.root);
    this.bookmarks = this.rootElement.querySelectorAll(this.selectors.bookmark);
    this.bindEvents();
  }

  onBookmarkClick = (bookmark) => {
    bookmark.classList.toggle(this.stateClasses.isActive);
    console.log('asd')
  };

  bindEvents() {
    this.bookmarks.forEach((bookmark) => {
      bookmark.addEventListener("click", () => this.onBookmarkClick(bookmark));
    });
  }
}

export default Posts;
