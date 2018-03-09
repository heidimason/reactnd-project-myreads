import React, { Component } from 'react'
import ShelfChanger from './ShelfChanger'

class ListBooks extends Component {
	render() {
        const { bookshelf, showingBooks } = this.props

        // console.log(showingBooks)

        return (
            <div>
                <div className="bookshelf-books">
                    <ol className="books-grid">
						{showingBooks.map( (book, index) => (
          					<li key={index}>
            					<div className="book">
              						<div className="book-top">
                						<div className="book-cover"
                                            style={{ backgroundImage: 'url(' + book.imageLinks.thumbnail + ')' }}>
                                        </div>

                						<ShelfChanger
                                            showingBooks={showingBooks}
                                            bookshelf={bookshelf}
                                        />
              						</div>

              						<div className="book-title">{book.title}</div>

              						<div className="book-authors">{book.authors}</div>
            					</div>
          					</li>
                        ))}
                    </ol>
                </div>
            </div>
		)
	}
}

export default ListBooks