function Shelf() {
  this.books = []
  this.generateBooks()
}

Shelf.prototype.generateBooks = function () {
  var times = 32;
  for(var i=0; i < times; i++){
    this.books.push(new Book);
  };
};
