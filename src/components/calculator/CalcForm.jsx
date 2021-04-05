import React from 'react'
import { func } from 'prop-types'
import { useInput } from '../../hooks/useInput'

import classes from './CalcForm.module.sass'

const CalcForm = ({ calculate }) => {

	const { value: currAlt, bind: bindCurrAlt, reset: resetCurrAlt } = useInput('')
	const { value: desAlt, bind: bindDesAlt, reset: resetDesAlt } = useInput('')
	const { value: descRate, bind: bindDescRate, reset: resetDescRate } = useInput('')
	const { value: grndSpeed, bind: bindGrndSpeed, reset: resetGrndSpeed } = useInput('')

	const handleSubmit = event => {
		event.preventDefault()
		console.log('Submitting values', currAlt, desAlt)
		const data = {
			currAlt,
			desAlt,
			descRate,
			grndSpeed
		}
		calculate(data)
		resetCurrAlt()
		resetDesAlt()
		resetGrndSpeed()
		resetDescRate()
	}

	return <form onSubmit={handleSubmit} className={classes.form}>
		<fieldset>
			<legend>Altitude</legend>
			<label>
				<input
					type="number"
					required
					placeholder="Current altitude"
					{...bindCurrAlt}
				/>
			</label>
			<label>
				<input
					type="number"
					required
					placeholder="Destination altitude"
					{...bindDesAlt}
				/>
			</label>
		</fieldset>

		<fieldset>
			<legend>Rate and speed</legend>
			<label>
				<input
					type="number"
					required
					placeholder="Descent rate"
					{...bindDescRate}
				/>
			</label>
			<label>
				<input
					type="number"
					required
					placeholder="Ground speed"
					{...bindGrndSpeed}
				/>
			</label>
		</fieldset>
		<fieldset className={classes.btnContainer}>
			<input
				className={classes.button}
				type="submit"
				value="calculate"
			/>
		</fieldset>
	</form>
}

CalcForm.propTypes= {
	calculate: func.isRequired
}

export default CalcForm
