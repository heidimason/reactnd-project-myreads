import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import * as BooksAPI from './utils/BooksAPI'
import './css/App.css'
import ListShelves from './components/ListShelves'
import SearchBooks from './components/SearchBooks'
import PageNotFound from './components/PageNotFound'

class BooksApp extends Component {
    state = {
        shelvedBooks: []
    }

    // Get all books on a shelf and populate shelvedBooks array
    getAllBooks() {
        BooksAPI.getAll().then( (shelvedBooks) => {
            this.setState({ shelvedBooks })
        }).catch( () =>
            alert('Error getting books!')
        )
    }

    // Get all shelved books immediately after component is inserted into DOM
    componentDidMount() {
        this.getAllBooks()
    }

    // Update book's shelf and repopulate shelvedBooks array
    updateShelf = (book, shelf) => {
        BooksAPI.update(book, shelf).then( () => {
            this.getAllBooks()
        }).catch( () =>
            alert('Error updating book!')
        )
    }

    render() {
        const { shelvedBooks } = this.state
           let { bookshelves } = this.props

        bookshelves = [
            { name: 'Currently Reading' },
            { name: 'Want to Read' },
            { name: 'Read' }
        ]

        return (
            <div className="app">
                <Switch>
                    <Route exact path="/" render={ () => (
                        <div className="list-books">
                            <div className="list-books-title">
                                <h1>MyReads</h1>
                            </div>

                            <ListShelves
                                shelvedBooks={shelvedBooks}
                                bookshelves={bookshelves}
                                onMoveBook={this.updateShelf}
                            />
                        </div>
                    )}/>

                    <Route path="/search" render={ () => (
                        <SearchBooks
                            onMoveBook={this.updateShelf}
                        />
                    )}/>

                    <Route component={PageNotFound}/>
                </Switch>
            </div>
        )
    }
}

export default BooksApp