function Shelf() {
  this.books = []
  this.generateBooks()
  this.specificBook = null;
}

Shelf.prototype.generateBooks = function () {
  var times = 32;
  for(var i=0; i < times; i++){
    this.books.push(new Book);
  };
};

Shelf.prototype.getSpecificBook = function (number) {
  var definitelyNumber = parseInt(number)
  this.specificBook = (this.books[definitelyNumber-1])
};
