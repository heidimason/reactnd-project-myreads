import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import ListBooks from './ListBooks'
import * as strMethods from './utils/strMethods'

class ListShelves extends Component {
	render() {
        const { bookshelves, shelvedBooks, onMoveBook } = this.props

		return (
			<div>
            	<ul className="list-books-content">
            		{bookshelves.map( (bookshelf, index) => (
	            		<li className="bookshelf" key={index}>
	              			<h2 className="bookshelf-title">{bookshelf.name}</h2>

	                        <ListBooks
                                bookshelf={strMethods.camelize( bookshelf.name.toLowerCase() )}
                                showingBooks={shelvedBooks.filter( book => strMethods.camelize( bookshelf.name.toLowerCase() ) === book.shelf )}
                                onMoveBook={onMoveBook}
                            />
	                    </li>
                    ))}
                </ul>

                <div className="open-search">
                    <Link to="/search">Add a book</Link>
                </div>
          	</div>
		)
	}
}

export default ListShelves