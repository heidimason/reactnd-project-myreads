import React from 'react'
import ShelfChanger from './ShelfChanger'

const ListBooks = props => {
    const { showingBooks, onMoveBook } = props

    return (
        <div>
            <div className="bookshelf-books">
                <ol className="books-grid">
					{showingBooks.map( (book, index) => (
      					<li key={index}>
        					<div className="book">
          						<div className="book-top">
            						<div className="book-cover"
                                        style={{ backgroundImage: `url(${book.imageLinks && book.imageLinks.thumbnail ? `${book.imageLinks.thumbnail}` : `http://via.placeholder.com/128x193?text=No%20Cover`})` }}
                                        alt={book.title}>
                                    </div>


            						<ShelfChanger
                                        bookshelf={book.shelf}
                                        showingBooks={showingBooks}
                                        onMoveBook={ shelf => onMoveBook(book, shelf) }
                                    />
          						</div>

          						<div className="book-title">{book.title}</div>

                                { /* If there is a book author */ }
                                {book.authors &&
      						        <div className="book-authors">{book.authors.map( author => author + '\n' )}</div>
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