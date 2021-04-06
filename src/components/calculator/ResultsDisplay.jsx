import React from 'react'
import { object } from 'prop-types'

import classes from './ResultsDisplay.module.sass'

const ResultsDisplay = ({ results }) => {

	const showTod = () => results.ToD
		? <>{results.ToD} miles away</>
		: null

	const showDescTime = () => results.descentTime
		? <>{results.descentTime} minutes</>
		: null

	return <article className={classes.container}>
		<p className={classes.header}>Results:</p>
		<div className={classes.resultsRow}>
			<p>
				Top of descent<br />
				{showTod()}
			</p>
			<p>
				Descent time<br />
				{showDescTime()}
			</p>
		</div>
	</article>
}

ResultsDisplay.propTypes = {
	results: object

}

// memoed
export default ResultsDisplay
