```

 __     ___  ____  _  _ ____  __ __  __ ______ __  __  __
 ||    // \\ || )) \\// || \\ || ||\ || | || | ||  || (( \
 ||    ||=|| ||=)   )/  ||_// || ||\\||   ||   ||==||  \\
 ||__| || || ||_)) //   || \\ || || \||   ||   ||  || \_))

```

# What is this?

I've been reading a lot of [Borges](https://en.wikipedia.org/wiki/Jorge_Luis_Borges) lately and was struck by how interesting it would be to express some of his short stories via code. I'm going to start with [The Library of Babel](https://en.wikipedia.org/wiki/The_Library_of_Babel) for starters, and maybe expand this project outwards into some more of Borges' work.

# The Library of Babel

```
"The universe (which others call the Library) is composed of an indefinite, perhaps infinite number of
hexagonal galleries. In the centre of each gallery is a ventilation shaft, bounded by a low railing.
From any hexagon one can see the floors above and below- one after another, endlessly. The arrangement
of the galleries is always the same: Twenty bookshelves, five to each side, line four of the hexagon's
six sides; the height of the bookshelves, floor to ceiling, is hardly greater than the height of a
normal librarian.

Each wall of the hexagon is furnished with five bookshelves; each bookshelf holds thirty-two books
identical in format; each book contains four hundred ten pages; each page, forty lines; each line,
approximately eighty black letters. There are also letters on the front cover of each book; those
letters neither indicate nor prefigure what the pages inside inside will say.

I will be bold enough to suggest this solution to the ancient problem: The Library is unlimited but
periodic. If an eternal traveler should journey in any direction, he would find after untold centuries
that the same volumes are repeated in the same disorder- which, repeated, becomes order: the Order. My
solitude is cheered by that elegant hope."
```
# Approach

According to the text, there are 640 books per hexagon (32 books * 20 shelves) and each book has 410 pages with 3200 characters on each one, separated into 40 lines of 80 letters. I think the best first step is to start with the smallest unit of the program, which in this case would be a randomly generated character (including spaces, commas and full stops), which can then be expanded to a line, a page and then a book. Then the book can be expanded to a shelf, a hexagon and finally a library. The user can then spend infinity trying to find meaning.

There's something quite thematically appropriate about inferring the library via its smallest component.

# Current Progress

15/8: Currently able to generate randomised characters and assemble them into lines, pages and books. Backend is done and able to render views- library.pug now displays the first two pages of a book object. It is genuinely fairly maddening trying to glean any meaning from the text:

![early days](https://github.com/wemmm/labyrinths/blob/master/public/images/earlyversion.png)

16/8: Now there's shelves and hexagons! But randomly generating 80 characters 40 times, for 410 pages, in 32 books across 20 shelves is a starting to get predictably hard to load. This adds up to 839,680,000 randomly generated characters. A hexagon takes roughly a minute to instantiate when I run the code on the console. I've also edited the possible characters so that shorter 'words' are made and now Chrome occasionally tries to tell me that my page appears to be in Polish, which is intriguing.

20/8: Bit of styling, and some small tweaks to letter distribution. Chrome now thinks books are in Maltese. 

# Tech I'm Using:

* Node.js & Express
* Javascript
* Jasmine
* HTML & CSS
