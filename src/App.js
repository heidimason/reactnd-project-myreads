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

    // Get all books from API and populate books array
    getAllBooks() {
        BooksAPI.getAll().then( (books) => {
            this.setState({ books })
        }).catch( () =>
            alert('Error getting books!')
        )
    }

    // Get all books immediately after component is inserted into DOM
    componentDidMount() {
        this.getAllBooks()
    }

    // Update book's shelf in API and repopulate books array
    updateShelf = (book, shelf) => {
        BooksAPI.update(book, shelf).then( () => {
            this.getAllBooks()
        }).catch( () =>
            alert('Error updating book!')
        )
    }

    render() {
        let { bookshelves } = this.props
            const { books } = this.state

        bookshelves = [
            { name: 'Currently Reading' },
            { name: 'Want to Read' },
            { name: 'Read' }
        ]

        return (
            <div className="app">
                <Route exact path="/" render={ () => (
                    <div className="list-books">
                        <div className="list-books-title">
                            <h1>MyReads</h1>
                        </div>

                        <ListShelves
                            books={books}
                            bookshelves={bookshelves}
                            onMoveBook={this.updateShelf}
                        />
                    </div>
                )}/>

                <Route path="/search" render={ () => (
                    <SearchBooks
                        books={books}
                        bookshelves={bookshelves}
                        onMoveBook={this.updateShelf}
                    />
                )}/>
            </div>
        )
    }
}

export default BooksApp