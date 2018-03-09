import React, { Component } from 'react'

class ShelfChanger extends Component {
	state = {
        // Shelf value is initially whatever it is in Books API
        shelf: this.props.bookshelf
    }

    moveBook = (event) => {
        this.props.onMoveBook(event.target.value);
    }

	render() {
		const { shelf } = this.state

		return (
			<div className="book-shelf-changer">
				<select
                    value={shelf}
                    onChange={this.moveBook}>
                    <option disabled>Move to...</option>
                    <option value="currentlyReading">Currently Reading</option>
                    <option value="wantToRead">Want to Read</option>
                    <option value="read">Read</option>
                    <option value="none">None</option>
              	</select>
            </div>
		)
	}
}

export default ShelfChanger