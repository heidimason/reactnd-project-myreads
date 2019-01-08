import React from 'react'
import renderer from 'react-test-renderer'
import SearchBooks from './SearchBooks'
import { BrowserRouter, Link } from 'react-router-dom'

describe('<SearchBooks />', () => {
	it('link to home page renders correctly', () => {
		const tree = renderer
			.create(
				<BrowserRouter>
					<Link to="/myreads">Add a book</Link>
				</BrowserRouter>
			)
			.toJSON()

		expect(tree).toMatchSnapshot()
	})
})