import React, { useState } from 'react'

import CalcForm from '../calculator/CalcForm'
import ResultsDisplay from '../calculator/ResultsDisplay'
import DescentCalculator from '../../utils/descentCalculator'

const CalcPage = () => {
	console.log('[CalcPage.js]')

	const [ results, setResults ] = useState({
		ToD: 0,
		descentTime: 0
	})

	const calculator = new DescentCalculator
	calculator.setParams(10000, 3000, 750, 150)

	const handleFormData = data => {

		console.log('Sending this to desc-calc', data)
		console.log('Current calc params: ', calculator.getParams())
		setResults({ ...results })
	}

	return <section>
		<h1>Calculate ToD</h1>
		<ResultsDisplay results={results} />
		<CalcForm calculate={handleFormData}/>
	</section>
}

export default CalcPage
