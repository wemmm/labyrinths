function Page() {
  this.possibleLetters = ['a', 'a', 'a', 'a', 'b', 'b', 'c', 'c', 'd', 'd', 'e', 'e', 'e', 'e', 'f', 'f', 'g', 'g', 'h', 'h', 'h', 'i', 'i', 'j', 'j', 'k', 'k', 'l', 'l', 'm', 'm', 'n', 'n', 'n', 'o', 'o', 'p', 'p', 'q', 'r', 'r', 'r', 's', 's', 's', 't', 't', 't', 't', 'u', 'u', 'v', 'w', 'x', 'y', 'z', ', ', '. ', ' ', ' ', ' ', ' ']
  this.line = []
  this.page = []
  this.generatePage()
}

Page.prototype.generateLine = function () {
  var times = 80;
  for(var i=0; i < times; i++){
    this.line.push(this.possibleLetters[Math.floor(Math.random() * this.possibleLetters.length)]);
  };
    this.page.push(this.line.join(""))
    this.line = []
};

Page.prototype.generatePage = function () {
  var times = 40;
  for(var i=0; i < times; i++){
    this.generateLine();
  };
    this.page = this.page.join("\n")
};
