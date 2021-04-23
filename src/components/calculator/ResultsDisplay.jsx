import React from 'react'
import { object } from 'prop-types'
import cx from 'classnames'

import classes from './ResultsDisplay.module.sass'

const ResultsDisplay = ({ results }) => {

	const styles = cx(classes.resultsRow, { [classes.visible]: results.ToD })

	return <div className={styles}>
		<p>
			{results.ToD && <>{results.ToD}<br />
				<small><em>miles away</em></small></>}
		</p>
		<p>
			{results.descentTime && <>{results.descentTime}<br />
				<small><em>mins ETA</em></small></>}
		</p>
	</div>
}

ResultsDisplay.propTypes = {
	results: object
}

export default ResultsDisplay
