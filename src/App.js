import React, { Component } from 'react'
import { Route } from 'react-router-dom'
// import * as BooksAPI from './BooksAPI'
import './App.css'
import ListShelves from './ListShelves'
import SearchBooks from './SearchBooks'

class BooksApp extends Component {
    state = {
        /**
         * TODO: Instead of using this state variable to keep track of which page
         * we're on, use the URL in the browser's address bar. This will ensure that
         * users can use the browser's back and forward buttons to navigate between
         * pages, as well as provide a good URL they can bookmark and share.
         */
        showSearchPage: false
    }

    render() {
        return (
            <div className="app">
                <Route exact path="/" render={() => (
                    <div className="list-books">
                        <div className="list-books-title">
                            <h1>MyReads</h1>
                        </div>

                        <ListShelves bookshelves={[
                            { name: 'Currently Reading' },
                            { name: 'Want to Read' },
                            { name: 'Read' }
                        ]}/>
                    </div>
                )}/>

                <Route path="/search" component={SearchBooks} />
            </div>
        )
    }
}

export default BooksApp