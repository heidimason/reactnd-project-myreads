import React from 'react'
import { Link } from 'react-router-dom'
import ListBooks from './ListBooks'
import { camelize } from '../utils/helpers'

const ListShelves = props => {
    const { bookshelves, shelvedBooks, onMoveBook } = props

	return (
		<div>
        	<ul className="list-books-content">
        		{bookshelves.map( (bookshelf, index) => (
            		<li className="bookshelf" key={index}>
              			<h2 className="bookshelf-title">{bookshelf.name}</h2>

                        <ListBooks
                            showingBooks={shelvedBooks.filter( book => camelize( bookshelf.name) === book.shelf )}
                            onMoveBook={onMoveBook}
                        />
                    </li>
                ))}
            </ul>

            <div className="open-search">
                <Link to="/myreads/search">Add a book</Link>
            </div>
      	</div>
	)
}

export default ListShelves