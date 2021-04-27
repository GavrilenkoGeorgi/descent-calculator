import React, { useState } from 'react'

import CalcForm from '../calculator/CalcForm'
import ResultsDisplay from '../calculator/ResultsDisplay'
import ErrorsDisplay from '../calculator/ErrorsDisplay'
import DescentCalculator from '../../utils/descentCalculator'

import classes from './CalcPage.module.sass'

const CalcPage = () => {

	const calculator = new DescentCalculator
	const initialResultsState = {
		ToD: '',
		descentTime: ''
	}

	const [ results, setResults ] = useState(initialResultsState)
	const [ errors, setErrors ] = useState(null)

	const handleFormData = data => {
		calculator.setParams(data)
		const errorsList = calculator.errors()

		if (!errorsList.length) {
			setErrors(null)
			setResults(prevValue => ({ ...prevValue, ...calculator.getResults() }))
		} else {
			setErrors(errorsList)
		}
	}

	const clearResults = () => {
		setResults(initialResultsState)
		setErrors(null)
	}

	return <section className={classes.container}>
		<h1>Top of descent</h1>
		{errors
			? <ErrorsDisplay errors={errors} />
			: <ResultsDisplay results={results} />}
		<CalcForm calculate={handleFormData} clearResults={clearResults}/>
	</section>
}

export default CalcPage
