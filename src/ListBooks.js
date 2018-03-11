import React, { Component } from 'react'
import ShelfChanger from './ShelfChanger'

class ListBooks extends Component {
	render() {
        const { bookshelf, showingBooks, onMoveBook } = this.props

        console.log(bookshelf)

        return (
            <div>
                <div className="bookshelf-books">
                    <ol className="books-grid">
						{showingBooks.map( (book, index) => (
          					<li key={index}>
            					<div className="book">
              						<div className="book-top">
                                        {/* If there is a book thumbnail */}
                                        {book.imageLinks &&
                    						<div className="book-cover"
                                                style={{ backgroundImage: 'url(' + book.imageLinks.thumbnail + ')' }}
                                                alt={book.title}>
                                            </div>
                                        }

                                        {/* If there is no book thumbnail */}
                                        {!book.imageLinks &&
                                            <div className="book-cover"
                                                alt={book.title}>
                                            </div>
                                        }

                						<ShelfChanger
                                            showingBooks={showingBooks}
                                            bookshelf={bookshelf}
                                            onMoveBook={ (newShelf) => onMoveBook(book, newShelf)}
                                        />
              						</div>

              						<div className="book-title">{book.title}</div>

                                    {/* If there is a book author */}
                                    {book.imageLinks &&
          						        <div className="book-authors">{book.authors}</div>
                                    }
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