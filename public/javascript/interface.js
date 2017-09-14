$(document).ready(function() {
  var shelf = new Shelf;

  $("#submitbook").on('click', function() {
    shelf.getSpecificBook($("#bookinput").val())
    $('#booktitle').text(shelf.specificBook.bookTitle)
    $('#page1').text(shelf.specificBook.currentPage1)
    $('#page2').text(shelf.specificBook.currentPage2)
  })

  $("#forward").on('click', function() {
    shelf.specificBook.nextPage()
    $('#page1').text(shelf.specificBook.currentPage1)
    $('#page2').text(shelf.specificBook.currentPage2)
  })

  $("#back").on('click', function() {
    shelf.specificBook.previousPage()
    $('#page1').text(shelf.specificBook.currentPage1)
    $('#page2').text(shelf.specificBook.currentPage2)
  })
})
