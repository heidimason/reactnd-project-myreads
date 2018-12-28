import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import * as BooksAPI from '../utils/BooksAPI'
import ListBooks from './ListBooks'
import sortBy from 'sort-by'
import { DebounceInput } from 'react-debounce-input'
import LoadingAnimation from './Mui/Progress/circular'

class SearchBooks extends Component {
	state = {
        loading: false,
		queriedBooks: [],
        noResults: null
	}

	updateQuery = query => {
        // Reset results from previous search
        this.setState({
            queriedBooks: [],
            noResults: null
        })

        BooksAPI.search(query.target.value).then( results => {
            if (query.target.value !== '') {
                this.setState({
                    loading: true
                })

                if (results.length) {
                    // More info on Promise.all(iterable):
                    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise#Methods
                    Promise.all(results.map( bookId => {
                        return BooksAPI.get(bookId.id)
                    })).then( queriedBooks => {
                        this.setState({
                            loading: false,
                            queriedBooks: queriedBooks
                        })
                    })
                } else {
                    this.setState({
                        loading: false,
                        noResults: 'No results matched your search'
                    })
                }
            } else {
                console.log('No search term entered')
            }
        }).catch( () =>
            alert('Error searching books!')
        )
    }

	render() {
		const { queriedBooks, noResults, loading } = this.state,
                                    { onMoveBook } = this.props

        // Display books in alphabetical order by title
		queriedBooks.sort(sortBy('title'))

		return (
			<div className="search-books">
            	<div className="search-books-bar">
              		<Link to="/myreads"
              			className="close-search">Close
              		</Link>

              		<div className="search-books-input-wrapper">
                		<DebounceInput type="text"
                			placeholder="Search by title or author"
                            debounceTimeout={600}
                			onChange={this.updateQuery}
                		/>
              		</div>
            	</div>

                { loading &&
                  <LoadingAnimation />
                }

                { noResults &&
                    <p className="error-no-results">{noResults}</p>
                }

	            <div className="search-books-results">
	            	<ListBooks
	            		showingBooks={queriedBooks}
	            		onMoveBook={onMoveBook}
	            	/>
            	</div>
          	</div>
		)
	}
}

export default SearchBooks