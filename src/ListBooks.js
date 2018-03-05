import React, { Component } from 'react'

class ListBooks extends Component {
	state = {
    	selectedShelf: 'none'
	}

	render() {
        const { showingBooks } = this.props,
             { selectedShelf } = this.state

		return (
             <div>
                <div className="bookshelf-books">
                    <ol className="books-grid">
						{showingBooks.map( (book, index) => (
          					<li key={index}>
            					<div className="book">
              						<div className="book-top">
                						<div className="book-cover"
                                            style={{ backgroundImage: 'url(' + book.img + ')' }}>
                                        </div>

                						<div className="book-shelf-changer">
                  							<select value={selectedShelf}
                                                onChange={() => { console.log(selectedShelf) }}>
				                                <option value="none" disabled>Move to...</option>
				                                <option value="currentlyReading">Currently Reading</option>
				                                <option value="wantToRead">Want to Read</option>
				                                <option value="read">Read</option>
				                                <option value="none">None</option>
			                              	</select>
			                            </div>
              						</div>

              						<div className="book-title">{book.title}</div>

              						<div className="book-authors">{book.author}</div>
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