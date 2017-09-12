function Book() {
  this.pages = []
  this.bookTitle = []
  this.generatePages()
  this.generateTitle()
  this.pageIndex = 0
  this.currentPage = this.pages[0].page
}

Book.prototype.generatePages = function () {
  var times = 410;
  for(var i=0; i < times; i++){
    this.pages.push(new Page);
  };
};

Book.prototype.generateTitle = function () {
  var times = 5;
  for(var i=0; i < times; i++){
    this.bookTitle.push(this.pages[0].possibleLetters[Math.floor(Math.random() * this.pages[0].possibleLetters.length)]);
  };
    this.bookTitle = this.bookTitle.join("")
};

Book.prototype.nextPage = function () {
  this.pageIndex = (this.pageIndex += 1);
  this.currentPage = this.pages[this.pageIndex].page;
};

Book.prototype.previousPage = function () {
  this.pageIndex = (this.pageIndex -= 1);
  this.currentPage = this.pages[this.pageIndex].page;
};
