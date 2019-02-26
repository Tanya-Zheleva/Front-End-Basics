function solve() {
    let library = (function () {
        let books = new Array();
        let categories = new Array();
        let bookIdGenerator = 2;
        let categoryIdGenerator = 50;

        function addBook(book) {
            let pattern = /^[A-Za-z0-9 !,.'":?]{2,100}$/g;
            let isbnPattern = /^((\d{10})|(\d{13}))$/g;

            if (!(pattern.test(book.title) && !pattern.test(book.category))) {
                throw 'Title and category must be between 2 and 100 characters, including letters, digits and special characters';
            }

            if (books.some(x => x.title === book.title)) {
                throw `Book ${book.title} already exists`;
            }

            if (!book.author.length) {
                throw 'Author must be a non-empty string';
            }

            if (!isbnPattern.test(book.isbn)) {
                throw 'ISBN must be 10 or 13 digits';
            }

            if (books.some(x => x.isbn === book.isbn)) {
                throw `Book with ISBN ${book.isbn} already exists`;
            }

            if (!categories.some(x => x.name === book.category)) {
                let category = {
                    id: categoryIdGenerator,
                    name: book.category
                };

                categoryIdGenerator -= 2;
                categories.push(category);
            }

            book.id = bookIdGenerator;
            bookIdGenerator++;
            books.push(book);

            return book;
        }

        function listBooks(criteria) {
            if (criteria !== 'author' && criteria !== 'category') {
                criteria = 'id';
            }

            return books
                .sort((a, b) => `${a[criteria]}`.localeCompare(`${b[criteria]}`))
                .map(x => `${x.id} - ${x.title} by ${x.author}, category ${x.category}`);
        }

        function listCategories() {
            return categories
                .sort((a, b) => a.id - b.id)
                .map(x => `${x.id} - ${x.name}`);
        }

        return {
            addBook: addBook,
            listBooks: listBooks,
            listCategories: listCategories
        };
    }());

    return library;
}

try {
    let lib = solve();
    let book = {
        title: 'The Raven',
        author: 'Edgar Allan Poe',
        isbn: '0123456789',
        category: 'Gothic'
    };

    let book2 = {
        title: 'Wuthering Heights',
        author: 'Emily Bronte',
        isbn: '0123456789123',
        category: 'Awesome'
    };

    let book3 = {
        title: 'The Castle of Otranto',
        author: 'Horace Walpole',
        isbn: '0129456789123',
        category: 'Creepy'
    };

    lib.addBook(book);
    lib.addBook(book2);
    lib.addBook(book3);

    console.log(lib.listBooks());
    console.log(lib.listCategories());

} catch (error) {
    console.log(error);
}