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
		{/* <p className={classes.header}>Results:</p> */}
		<div className={classes.resultsRow}>
			<p>
				ToD
				<span>{showTod()}</span>
			</p>
			<p>
				Descent time
				<span>{showDescTime()}</span>
			</p>
		</div>
	</article>
}

ResultsDisplay.propTypes = {
	results: object

}

// memoed
export default ResultsDisplay
