import React, { useState } from 'react'

import CalcForm from '../calculator/CalcForm'
import ResultsDisplay from '../calculator/ResultsDisplay'
import DescentCalculator from '../../utils/descentCalculator'

import classes from './CalcPage.module.sass'

const CalcPage = () => {

	const [ results, setResults ] = useState({
		ToD: '',
		descentTime: ''
	})

	const calculator = new DescentCalculator

	const handleFormData = data => {
		const results = calculator.setParams(data).getResults()
		setResults((prevValue) => ({ ...prevValue, ...results }))
	}

	return <section className={classes.container}>
		<h1>Top of descent</h1>
		<ResultsDisplay results={results} />
		<CalcForm calculate={handleFormData}/>
	</section>
}

export default CalcPage
