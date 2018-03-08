import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import * as BooksAPI from './utils/BooksAPI'
import './App.css'
import ListShelves from './ListShelves'
import SearchBooks from './SearchBooks'

class BooksApp extends Component {
    state = {
        books: []
    }

    // Get all books from API
    componentDidMount() {
        BooksAPI.getAll().then( (books) => {
            this.setState({ books })
        }).catch( () =>
            alert('Error getting books!')
        )
    }

    // moveBook = (book, shelf) => {
    //     BooksAPI.update().then( ((shelf, book) => {
    //         this.setState({ shelf })
    //     })
    // }

    render() {
        const { books } = this.state

        return (
            <div className="app">
                <Route exact path="/" render={ () => (
                    <div className="list-books">
                        <div className="list-books-title">
                            <h1>MyReads</h1>
                        </div>

                        <ListShelves
                            bookshelves={[
                                { name: 'Currently Reading' },
                                { name: 'Want to Read' },
                                { name: 'Read' }
                            ]}

                            books={books}
                            // onChangeShelf={this.moveBook}
                        />
                    </div>
                )}/>

                <Route path="/search" render={ () => (
                    <SearchBooks
                        books={books}
                        // onChangeShelf={this.moveBook}
                    />
                )}/>
            </div>
        )
    }
}

export default BooksApp