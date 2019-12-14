import React, { Component } from 'react'
import DropDownMenu from 'material-ui/DropDownMenu'
import MenuItem from 'material-ui/MenuItem'
import { camelize, isSafari, isFirefox } from '../utils/helpers'

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

        let { menuItems } = this.props

        menuItems = [
            { name: 'Currently Reading' },
            { name: 'Want to Read' },
            { name: 'Read' },
            { name: 'None' }
        ]

		return (
			<div className="book-shelf-changer">
                { isSafari ?
                    <select
                        value={newShelf ? newShelf : bookshelf}
                        onChange={this.moveBook}
                        className="book-shelf-changer-select">
                            {menuItems.map( (menuItem, index) => (
                                <option
                                    value={ camelize(menuItem.name) }>{menuItem.name}
                                </option>
                            ))}
                    </select>
                    :
                    <DropDownMenu
                        value={newShelf ? newShelf : bookshelf}
                        onChange={this.moveBook}
                        className="book-shelf-changer-select"
                        autoWidth={true}>
                        {menuItems.map( (menuItem, index) => (
                            <MenuItem key={index}>
                                <option
                                    value={ camelize(menuItem.name) }
                                    className={
                                        [bookshelf === camelize(menuItem.name) ? 'current-shelf' : '',
                                        isFirefox ? 'current-shelf-ff' : ''].join(' ')}>{menuItem.name}
                                </option>
                            </MenuItem>
                        ))}
                    </DropDownMenu>
                }
            </div>
		)
	}
}

export default ShelfChanger
