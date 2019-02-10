import React from 'react'
import { Link } from 'react-router-dom'

const PageNotFound = () => (
	<div className="pg-not-found">
		<h1>Looks like you took a wrong turn!</h1>

		<Link to="/myreads">Take me home!</Link>
	</div>
)

export default PageNotFound