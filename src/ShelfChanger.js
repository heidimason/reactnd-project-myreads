import React, { Component } from 'react'

class ShelfChanger extends Component {
	state = {
        shelf: ''
    }

    updateShelf = (shelf) => {
        this.setState({
            shelf: shelf
        })
    }

	render() {
		const { shelf } = this.state

		return (
			<div className="book-shelf-changer">
				<select
                    value={shelf}
                    onChange={ (event) => this.updateShelf(event.target.value)}>
                    <option disabled>Move to...</option>
                    <option value="currentlyReading">Currently Reading</option>
                    <option value="wantToRead">Want to Read</option>
                    <option value="read">Read</option>
                    <option value="none">None</option>
              	</select>
                <p>{console.log(shelf)}</p>
            </div>
		)
	}
}

export default ShelfChanger