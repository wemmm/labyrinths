function Page() {
  this.possibleLetters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', ',', '.', ' ']
  this.line = []
}

Page.prototype.generateLine = function () {
  var times = Math.floor(Math.random() * 80) + 1;
  for(var i=0; i < times; i++){
    this.line.push(this.possibleLetters[Math.floor(Math.random() * this.possibleLetters.length)]);
  };
    this.line = this.line.join("")
};
