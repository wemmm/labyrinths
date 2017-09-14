function Book() {
  this.pages = []
  this.bookTitle = []
  this.generatePages()
  this.generateTitle()
  this.pageIndex = 0
  this.currentPage1 = this.pages[0].page
  this.currentPage2 = this.pages[1].page
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
  this.currentPage1 = this.pages[(this.pageIndex + 1)].page;
  this.currentPage2 = this.pages[(this.pageIndex + 2)].page;
};

Book.prototype.previousPage = function () {
  this.pageIndex = (this.pageIndex -= 1);
  this.currentPage1 = this.pages[this.pageIndex].page;
  this.currentPage2 = this.pages[(this.pageIndex + 1)].page;
};
