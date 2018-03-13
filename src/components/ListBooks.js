import React from 'react'
import ShelfChanger from './ShelfChanger'

function ListBooks (props) {
    const { showingBooks, onMoveBook } = props

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
                                        bookshelf={book.shelf}
                                        showingBooks={showingBooks}
                                        onMoveBook={ (shelf) => onMoveBook(book, shelf) }
                                    />
          						</div>

          						<div className="book-title">{book.title}</div>

                                {/* If there is a book author */}
                                {book.authors &&
      						        <div className="book-authors">{book.authors.map( (author) => author + '\n' )}</div>
                                }
        					</div>
      					</li>
                    ))}
                </ol>
            </div>
        </div>
	)
}

export default ListBooks