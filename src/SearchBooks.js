import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import ListBooks from './ListBooks'
import escapeRegExp from 'escape-string-regexp'
import sortBy from 'sort-by'

class SearchBooks extends Component {
	state = {
		query: ''
	}

	updateQuery = (query) => {
        this.setState({
            query: query
        })
    }

	render() {
		const { books } = this.props,
			  { query } = this.state

		let showingBooks

		books.sort(sortBy('title'))

		if (query) {
            // escapeRegExp = escape special characters
            // i = ignore case i.e. Not case sensitive
            const match = new RegExp(escapeRegExp (query), 'i');

            showingBooks = books.filter( (book) => match.test(book.title) || match.test(book.author) );
        } else {
            showingBooks = [];
        }

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
                			value={query}
                			onChange={ (event) => this.updateQuery(event.target.value)}
                		/>
              		</div>
            	</div>

	            <div className="search-books-results">
	            	<ListBooks
	            		showingBooks={showingBooks}
	            	/>
	            </div>
          	</div>
		)
	}
}

export default SearchBooks