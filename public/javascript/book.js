function Book() {
  this.pages = []
  this.generatePages()
}

Book.prototype.generatePages = function () {
  var times = 410;
  for(var i=0; i < times; i++){
    this.pages.push(new Page);
  };
};
