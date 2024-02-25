const book = {
    title: "Nice Books to Read",
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

console.log(printAuthorAndTitle(book));
