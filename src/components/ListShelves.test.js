import React from 'react'
import renderer from 'react-test-renderer'
import ListShelves from './ListShelves'
import { BrowserRouter, Link } from 'react-router-dom'

describe('<ListShelves />', () => {
	it('renders correctly', () => {
		const tree = renderer
			.create(
				<BrowserRouter>
					<Link to="/myreads/search">Add a book</Link>
				</BrowserRouter>
			)
			.toJSON()

		expect(tree).toMatchSnapshot()
	})
})