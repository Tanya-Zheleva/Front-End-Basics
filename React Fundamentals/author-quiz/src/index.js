import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import AuthorQuiz from './components/AuthorQuiz';
import * as serviceWorker from './serviceWorker';
import { shuffle, sample } from 'underscore';

const authors = [
    {
        name: 'Mark Twain',
        imageUrl: 'images/authors/marktwain.jpg',
        imageSource: 'Wikipedia, Commons',
        books: [
            'The Adventures of Huckleberry Finn',
            'Life of Mississippi',
            'Roughing It'
        ]
    },
    {
        name: 'William Shakespeare',
        imageUrl: 'images/authors/williamshakespeare.jpg',
        imageSource: 'Wikipedia, Commons',
        books: [
            'Hamlet',
            'Macbeth',
            'Romeo and Juliet'
        ]
    },
];

function getTurnData(authors) {
    const allBooks = authors.reduce(function(p, c, i) {
        return p.concat(c.books);
    }, []);

    const fourRandomBooks = shuffle(allBooks).slice(0, 4);
    const answer = sample(fourRandomBooks);

    return {
        books: fourRandomBooks,
        author: authors.find(author => author.books.some(title => title === answer))
    };
}

const state = {
    turnData: getTurnData(authors)
};

ReactDOM.render(<AuthorQuiz {...state} />, document.getElementById('root'));

serviceWorker.unregister();
