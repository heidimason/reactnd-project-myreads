import React, { Component } from 'react'

class ShelfChanger extends Component {
	state = {
        newShelf: ''
    }

    moveBook = event => {
        this.props.onMoveBook(event.target.value)

        this.setState({
            newShelf: event.target.value
        })
    }

	render() {
        const { bookshelf } = this.props,
               { newShelf } = this.state

		return (
			<div className="book-shelf-changer">
				<select
                    value={newShelf ? newShelf : bookshelf}
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