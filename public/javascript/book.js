function Book() {
  this.pages = []
  this.bookTitle = []
  this.generatePages()
  this.generateTitle()
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

// TODO: Finish this function and then hook it up to the interface.

Book.prototype.showSpecificPage = function () {

};
