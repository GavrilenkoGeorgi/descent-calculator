import React from 'react'
import { arrayOf, string } from 'prop-types'

import classes from './ErrorsDisplay.module.sass'

const ErrorsDisplay = ({ errors }) => {
	return <ul className={classes.errorsList}>
		{errors.map(err => <li key={err}>
			{err}
		</li>)}
	</ul>
}

ErrorsDisplay.propTypes = {
	errors: arrayOf(string)
}

export default ErrorsDisplay
