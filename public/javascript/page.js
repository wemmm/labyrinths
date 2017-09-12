function Page() {
  this.possibleLetters = ['a', 'a', 'b', 'c', 'd', 'e', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'm', 'n', 'n', 'o', 'p', 'q', 'r', 's', 's', 't', 't', 'u', 'v', 'w', 'x', 'y', 'z', ', ', '. ', ' ', ' ', ' ']
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
