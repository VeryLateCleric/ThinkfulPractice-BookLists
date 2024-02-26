const book = {
    title: "Nice Books to Read",
    genre: "Essay",
    priceInCents: 1199,
    author: {
        firstName: "Phillip",
        lastName: "Bookman",
    },
};
const manyBooks = [
    {
        title: "The Fellowship of the Ring",
        genre: "Fantasy",
        priceInCents: 1599,
        author: {
            firstName: "J.R.R.",
            lastName: "Tolkien",
        },
    },
    {
        title: "Storm Front",
        genre: "Fantasy",
        priceInCents: 1299,
        author: {
            firstName: "Jim",
            lastName: "Butcher",
        },
    },
    {
        title: "The Name of the Wind",
        genre: "Fantasy",
        priceInCents: 1499,
        author: {
            firstName: "Patrick",
            lastName: "Rothfuss",
        },
    },
    {
        title: "The Great Gatsby",
        genre: "Fiction",
        priceInCents: 1199,
        author: {
            firstName: "F. Scott",
            lastName: "Fitzgerald",
        },
    },
    {
        title: "To Kill a Mockingbird",
        genre: "Fiction",
        priceInCents: 1099,
        author: {
            firstName: "Harper",
            lastName: "Lee",
        },
    },
    {
        title: "The Pillars of the Earth",
        genre: "Historical Fiction",
        priceInCents: 1699,
        author: {
            firstName: "Ken",
            lastName: "Follett",
        }
    },
    {
        title: "The Book Thief",
        genre: "Historical Fiction",
        priceInCents: 1499,
        author: {
            firstName: "Markus",
            lastName: "Zusak",
            },
    },
    {
        title: "All the Light We Cannot See",
        genre: "Historical Fiction",
        priceInCents: 1799,
        author: {
            firstName: "Anthony",
            lastName: "Doerr",
            },
    },
    {
        title: "The Nightingale",
        genre: "Historical Fiction",
        priceInCents: 1599,
        author: {
            firstName: "Kristin",
            lastName: "Hannah",
            },
    },
    {
        title: "The Tattooist of Auschwitz",
        genre: "Historical Fiction",
        priceInCents: 1399,
        author: {
            firstName: "Heather",
            lastName: "Morris",
            },
    },

]
function printAuthorAndTitle(product) {
    const author = product.author;
    const title = product.title;
    return `${title} by ${author.firstName} ${author.lastName}`;
}

function printTitleAndPrice(product) {
    const { title, priceInCents } = product;
    return `${title} is available for $${(priceInCents / 100 ).toFixed(2)}`;
}
//prints title and price without multiple const declarations and in one line. Also reduces usage of product.

function printTitlePriceAndAuthor(product) {
    const {
        author: { firstName, lastName },
        title,
        priceInCents
    } = product;

    return `The book ${title} by ${firstName} ${lastName} is available for $${(priceInCents / 100).toFixed(2)}.` // 'The book "Title" by "Author" is available for purchase for "Price" 
}
//prints title, author, and price in that order with specified message and proper punctuation

function showBooksByGenre(books, genre) {
    const filteredBooks = books.filter(book => book.genre === genre);
    
    if (filteredBooks.length === 0) {
        return `There are no books available in the ${genre} section, our apologies!`
    } else {
        const bookTitles = filteredBooks.map(book => `'${book.title}'`).join(', ');
        if (filteredBooks.length === 1) {
            return `The book ${bookTitles} is availble in the ${genre} section`
        } else if (filteredBooks.length === 2) {
            return `The books ${bookTitles} are available in the '${genre}' section.`;
        } else {
            const lastBookTitle = filteredBooks[filteredBooks.length - 1].title;
            const otherBookTitles = bookTitles.slice(0, -lastBookTitle.length - 2);
            return `The books ${otherBookTitles} and '${lastBookTitle}' are available in the '${genre}' section.`;     
    }
    }
}

// function addToShoppingCart(cart, product) {
//     
//     console.log(`${product.title} added to the shopping cart.`)
// }

console.log(printTitleAndPrice(book));
console.log(printAuthorAndTitle(book));
console.log(printTitlePriceAndAuthor(book));
// console.log(addToShoppingCart(book));
console.log(showBooksByGenre(manyBooks, "Fantasy"))
console.log(showBooksByGenre(manyBooks, "Fiction"))
console.log(showBooksByGenre(manyBooks, "Historical Fiction"))