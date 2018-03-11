import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import * as BooksAPI from './utils/BooksAPI'
import ListBooks from './ListBooks'
// import * as strMethods from './utils/strMethods'
import sortBy from 'sort-by'

class SearchBooks extends Component {
	state = {
		queriedBooks: []
	}

	updateQuery = (event) => {
        // Reset displayed books from previous search
        this.setState({
            queriedBooks: []
        })

        if (event.target.value !== '') {
            BooksAPI.search(event.target.value).then( (results) => {
                if (results.length) {
                    Promise.all(results.map( (book) => {
                        return BooksAPI.get(book.id)
                    })).then((queriedBooks) => {
                        this.setState({
                            queriedBooks: queriedBooks
                        })
                    }).catch( () =>
                        alert('Error searching for books!')
                    )
                }
            })
        }
    }

	render() {
		const { bookshelves, onMoveBook } = this.props,
			  			 { queriedBooks } = this.state

        // Display books in alphabetical order by title
		queriedBooks.sort(sortBy('title'))

		const bookshelfName = bookshelves.map(bookshelf => bookshelf.name)
		// console.log(bookshelfName)

		return (
			<div className="search-books">
            	<div className="search-books-bar">
              		<Link to="/"
              			className="close-search">Close
              		</Link>

              		<div className="search-books-input-wrapper">
		                {/*
		                  NOTES: The search from BooksAPI is limited to a particular set of search terms.
		                  You can find these search terms here:
		                  https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

		                  However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
		                  you don't find a specific author or title. Every search is limited by search terms.
		                */}
                		<input type="text"
                			placeholder="Search by title or author"
                			onChange={this.updateQuery}
                		/>
              		</div>
            	</div>

	            <div className="search-books-results">
	            	<ListBooks
	            		bookshelf={queriedBooks.filter( book => book.shelf === bookshelfName )}
	            		showingBooks={queriedBooks}
	            		onMoveBook={onMoveBook}
	            	/>
            	</div>
          	</div>
		)
	}
}

export default SearchBooks