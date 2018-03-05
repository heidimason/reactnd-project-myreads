import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import ListBooks from './ListBooks'

class ListShelves extends Component {
	render() {
        const { bookshelves, books } = this.props

		return (
			<div>
            	<ul className="list-books-content">
            		{bookshelves.map( (bookshelf, index) => (
	            		<li className="bookshelf" key={index}>
	              			<h2 className="bookshelf-title">{bookshelf.name}</h2>

	                        <ListBooks
                                showingBooks={books.filter( book => book.shelf === bookshelf.name )}
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