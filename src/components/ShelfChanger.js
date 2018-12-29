import React, { Component } from 'react'
import DropDownMenu from 'material-ui/DropDownMenu'
import MenuItem from 'material-ui/MenuItem'

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
                <DropDownMenu
                    value={newShelf ? newShelf : bookshelf}
                    onChange={this.moveBook}
                    className="book-shelf-changer-select"
                    autoWidth={true}>

                    <MenuItem>
                        <option value="currentlyReading">Currently Reading</option>
                    </MenuItem>

                    <MenuItem>
                        <option value="wantToRead">Want to Read</option>
                    </MenuItem>

                    <MenuItem>
                        <option value="read">Read</option>
                    </MenuItem>

                    <MenuItem>
                        <option value="none">None</option>
                    </MenuItem>

                </DropDownMenu>
            </div>
		)
	}
}

export default ShelfChanger