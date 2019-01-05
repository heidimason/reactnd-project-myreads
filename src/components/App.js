import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import * as BooksAPI from '../utils/BooksAPI'
import '../css/App.css'
import ListShelves from './ListShelves'
import SearchBooks from './SearchBooks'
import PageNotFound from './PageNotFound'

class BooksApp extends Component {
    state = {
        shelvedBooks: []
    }

    // Get all books on a shelf and populate shelvedBooks array
    getAllBooks() {
        BooksAPI.getAll().then( shelvedBooks =>
            this.setState({ shelvedBooks })
        ).catch( () =>
            alert('Error getting books!')
        )
    }

    // Get all shelved books immediately after component is inserted into DOM
    componentDidMount() {
        this.getAllBooks()
    }

    // Update book's shelf and repopulate shelvedBooks array
    updateShelf = (book, shelf) => {
        BooksAPI.update(book, shelf).then( () =>
            this.getAllBooks()
        ).catch( () =>
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
                <MuiThemeProvider>
                    <BrowserRouter>
                        <Switch>
                            <Route
                                exact
                                path="/"
                                render={ () => (
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
                                )}
                            />

                            <Route
                                exact
                                path="/myreads"
                                render={ () => (
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
                                )}
                            />

                            <Route
                                exact
                                path="/myreads/search"
                                render={ () => (
                                    <SearchBooks
                                        onMoveBook={this.updateShelf}
                                    />
                                )}
                            />

                            <Route component={PageNotFound}/>
                        </Switch>
                    </BrowserRouter>
                </MuiThemeProvider>
            </div>
        )
    }
}

export default BooksApp