import React, { useState } from 'react'

import CalcForm from '../calculator/CalcForm'
import ResultsDisplay from '../calculator/ResultsDisplay'
import DescentCalculator from '../../utils/descentCalculator'

import classes from './CalcPage.module.sass'

const CalcPage = () => {

	const calculator = new DescentCalculator
	const initialResultsState = {
		ToD: '',
		descentTime: ''
	}

	const [ results, setResults ] = useState(initialResultsState)

	const handleFormData = data => {
		const results = calculator.setParams(data).getResults()
		setResults((prevValue) => ({ ...prevValue, ...results }))
	}

	const clearResults = () => {
		setResults(initialResultsState)
	}

	return <section className={classes.container}>
		<h1>Top of descent</h1>
		<ResultsDisplay results={results} />
		<CalcForm calculate={handleFormData} clearResults={clearResults}/>
	</section>
}

export default CalcPage
