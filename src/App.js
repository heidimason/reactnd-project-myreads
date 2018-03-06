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

    componentDidMount() {
        BooksAPI.getAll().then((books) => {
            this.setState({ books })
        })
    }

    render() {
        return (
            <div className="app">
                <Route exact path="/" render={() => (
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

                            books={this.state.books}
                        />
                    </div>
                )}/>

                <Route path="/search" render={() => (
                    <SearchBooks
                        books={this.state.books}
                    />
                )}/>
            </div>
        )
    }
}

export default BooksApp