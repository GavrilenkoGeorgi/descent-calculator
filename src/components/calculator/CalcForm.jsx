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
		const data = {
			currAlt,
			desAlt,
			descRate,
			grndSpeed
		}
		calculate(data)
	}

	const handleReset = () => {
		resetCurrAlt()
		resetDesAlt()
		resetGrndSpeed()
		resetDescRate()
	}

	return <form onSubmit={handleSubmit} onReset={handleReset} className={classes.form}>
		<fieldset>
			<legend>Set altitude <small><em>(feet)</em></small></legend>
			<label>
				<input
					type="number"
					name="currAlt"
					required
					placeholder="Current altitude"
					{...bindCurrAlt}
				/>
			</label>
			<label>
				<input
					type="number"
					name="desAlt"
					required
					placeholder="Destination altitude"
					{...bindDesAlt}
				/>
			</label>
		</fieldset>

		<fieldset>
			<legend>Set rate <small><em>(feet/min)</em></small>{' '}
			and ground speed <small><em>(knots)</em></small></legend>
			<label>
				<input
					type="number"
					name="descRate"
					required
					placeholder="Descent rate"
					{...bindDescRate}
				/>
			</label>
			<label>
				<input
					type="number"
					name="grndSpeed"
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
			<input
				className={classes.button}
				type="reset"
				value="clear"
			/>
		</fieldset>
	</form>
}

CalcForm.propTypes= {
	calculate: func.isRequired
}

export default CalcForm
