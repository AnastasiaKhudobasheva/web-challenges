console.clear();

/*
1: Create the data for a book in an online store. Define variables for the following details:
  - The title of the book
  - The author of the book
  - The book's rating
  - The number of copies sold
*/

// --v-- write your code here --v--

// --^-- write your code here --^--

const bookTitle = "Book";
const bookAuthor = "A B";
let bookRating = 5;
let copiesSold = 210;

console.log(bookTitle, bookAuthor, bookRating, copiesSold);

/*
2: Log all variables to the console, for example:

Title: The Lord of the Javascript
Author: Mario
Rating: 4.2
Sales: 120

Then:
- Increase the number of sales.
- Update the book's rating.
- Log all variables to the console again after making these updates.
*/

// --v-- write your code here --v--

// --^-- write your code here --^--
bookRating = bookRating + 0.4;
copiesSold = copiesSold + 15;

console.log(bookTitle, bookAuthor, bookRating, copiesSold);

/*
3: The logging code above is repetitive and hard to maintain.
   Refactor your code by doing the following:

 - Write a function called `logBookData` that logs all the book details to the console.
 - Replace the existing `console.log` statements with calls to this function.
 - Then, increase the number of sales two more times and log the updated details after each increase.
*/

// --v-- write your code here --v--

function logBookData() {
  console.log("Title: " + bookTitle);
  console.log("Author: " + bookAuthor);
  console.log("Rating: " + bookRating);
  console.log("Sales: " + copiesSold);
}

logBookData();

copiesSold = copiesSold + 15;
logBookData();

copiesSold = copiesSold + 10;
logBookData();

// --^-- write your code here --^--
