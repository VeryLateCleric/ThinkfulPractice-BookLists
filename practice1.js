const book = {
    title: "Nice Books to Read",
    genre: "Essay",
    priceInCents: 1199,
    author: {
        firstName: "Phillip",
        lastName: "Bookman",
    },
};

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

    return `The book ${title} by ${firstName} ${lastName} is available for $${(priceInCents / 100).toFixed(2)}` // 'The book "Title" by "Author" is available for purchase for "Price" 
}

console.log(printTitleAndPrice(book));
console.log(printAuthorAndTitle(book));
console.log(printTitlePriceAndAuthor(book));
