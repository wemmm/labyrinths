function Hexagon() {
  this.shelves = []
  this.generateShelves()
}

Hexagon.prototype.generateShelves = function () {
  var times = 20;
  for(var i=0; i < times; i++){
    this.shelves.push(new Shelf);
  };
};
