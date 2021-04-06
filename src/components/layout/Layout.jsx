import React from 'react'
import { children } from '../../propTypes'

import classes from './Layout.module.sass'

const Layout = ({ children }) => {
	return <main className={classes.layout}>
		{children}
	</main>
}

Layout.propTypes = {
	children
}

export default Layout
