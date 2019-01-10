import React from 'react'
import renderer from 'react-test-renderer'
import ListShelves from './ListShelves'
import { Link } from 'react-router-dom'
import { StaticRouter } from 'react-router'

describe('<ListShelves />', () => {
	it('link to search page renders correctly', () => {
		const context = {}

		const tree = renderer
			.create(
				<StaticRouter
					context={context}>
					<Link to="/myreads/search">Add a book</Link>
				</StaticRouter>
			)
			.toJSON()

		expect(tree).toMatchSnapshot()
	})
})