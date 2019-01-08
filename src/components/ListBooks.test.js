import React from 'react'
import renderer from 'react-test-renderer'
import ListBooks from './ListBooks'

describe('<ListBooks />', () => {
	it('renders correctly when there are no items', () => {
		const tree = renderer.create(
			<ListBooks showingBooks={[]} />
		).toJSON()

		expect(tree).toMatchSnapshot()
	})
})
