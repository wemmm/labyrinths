$(document).ready(function() {
  var shelf = new Shelf;

  $("#submitbook").on('click', function() {
    shelf.getSpecificBook($("#bookinput").val())
    $('#booktitle').text(shelf.specificBook.bookTitle)
  })

  $("#submitpage").on('click', function() {
    $('#page1').text(shelf.specificBook.pages[0].page)
    $('#page2').text(shelf.specificBook.pages[1].page)
  })

})
