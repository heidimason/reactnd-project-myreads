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
        noResults: null,
        searchTerms1: null,
        searchTerms2: null
	}

	updateQuery = query => {
        // Reset results from previous search
        this.setState({
            queriedBooks: [],
            noResults: null,
            searchTerms1: null,
            searchTerms2: null
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
                            queriedBooks
                        })
                    })
                } else {
                    this.setState({
                        loading: false,
                        noResults: 'No results matched your search',
                        searchTerms1: 'Please note that the search from BooksAPI is currently limited to the following search terms: ',
                        searchTerms2: 'Android, Art, Artificial Intelligence, Astronomy, Austen, Baseball, Basketball, Bhagat, Biography, Brief, Business, Camus, Cervantes, Christie, Classics, Comics, Cook, Cricket, Cycling, Desai, Design, Development, Digital Marketing, Drama, Drawing, Dumas, Education, Everything, Fantasy, Film, Finance, First, Fitness, Football, Future, Games, Gandhi, Homer, Horror, Hugo, Ibsen, Journey, Kafka, King, Lahiri, Larsson, Learn, Literary Fiction, Make, Manage, Marquez, Money, Mystery, Negotiate, Painting, Philosophy, Photography, Poetry, Production, Programming, React, Redux, River, Robotics, Rowling, Satire, Science Fiction, Shakespeare, Singh, Swimming, Tale, Thrun, Time, Tolstoy, Travel, Ultimate, Virtual Reality, Web Development, iOS'
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
		const { queriedBooks, loading, noResults, searchTerms1, searchTerms2 } = this.state,
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
                			placeholder="Search by title, author, or subject"
                            debounceTimeout={600}
                			onChange={this.updateQuery}
                		/>
              		</div>
            	</div>

                { loading &&
                  <LoadingAnimation />
                }

                { noResults &&
                    <div>
                        <h3
                            className="error-no-results"
                            style={{paddingTop: '80px'}}>{noResults}
                        </h3>

                        <p className="error-no-results">{searchTerms1}</p>

                        <p className="error-no-results">{searchTerms2}</p>
                    </div>
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