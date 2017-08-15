$(document).ready(function() {
  var book = new Book;

  $('#page1').text(book.pages[0].page)

  $('#page2').text(book.pages[1].page)
})
