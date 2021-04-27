import React, { useState } from 'react'
import { func } from 'prop-types'
import { useInput } from '../../hooks/useInput'

import cx from 'classnames'
import classes from './CalcForm.module.sass'

const CalcForm = ({ calculate, clearResults }) => {

	const { value: currAlt, bind: bindCurrAlt, reset: resetCurrAlt } = useInput('')
	const { value: desAlt, bind: bindDesAlt, reset: resetDesAlt } = useInput('')
	const { value: descRate, bind: bindDescRate, reset: resetDescRate } = useInput('')
	const { value: grndSpeed, bind: bindGrndSpeed, reset: resetGrndSpeed } = useInput('')

	const [ focused, setFocused ] = useState({})

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
		resetDescRate()
		resetGrndSpeed()
	}

	const focusInput = (event) => {
		setFocused({ [event.target.name]: true })
	}

	const blurInput = (event) => {
		setFocused({ [event.target.name]: false })
	}

	return <form
		onSubmit={handleSubmit}
		onReset={handleReset}
		className={classes.materialForm}
	>
		<fieldset>
			<legend>Set altitude <small><em>(feet)</em></small></legend>
			{/*current altitude*/}
			<div className={cx(classes.materialFormItem,
				{ [classes.focused]: focused.currAlt, [classes.hasValue]: currAlt })}>
				<label
					className={classes.materialFormLabel}
					htmlFor="currAlt"
				>
					Current altitude
				</label>
				<input
					id="currAlt"
					className={classes.materialFormField}
					onFocus={focusInput}
					onBlur={blurInput}
					type="number"
					name="currAlt"
					required
					{...bindCurrAlt}
				/>
			</div>

			{/*destination altitude*/}
			<div className={cx(classes.materialFormItem,
				{ [classes.focused]: focused.desAlt, [classes.hasValue]: desAlt })}>
				<label
					className={classes.materialFormLabel}
					htmlFor="desAlt"
				>
					Destination altitude
				</label>
				<input
					id="desAlt"
					className={classes.materialFormField}
					onFocus={focusInput}
					onBlur={blurInput}
					type="number"
					name="desAlt"
					required
					{...bindDesAlt}
				/>
			</div>
		</fieldset>

		<fieldset>
			<legend>Set rate <small><em>(feet/min)</em>
			</small> and ground speed <small><em>(knots)</em></small>
			</legend>
			{/*descent rate*/}
			<div className={cx(classes.materialFormItem,
				{ [classes.focused]: focused.descRate, [classes.hasValue]: descRate })}>
				<label
					className={classes.materialFormLabel}
					htmlFor="descRate"
				>
					Descent rate
				</label>
				<input
					id="descRate"
					className={classes.materialFormField}
					onFocus={focusInput}
					onBlur={blurInput}
					type="number"
					name="descRate"
					required
					{...bindDescRate}
				/>
			</div>

			{/*ground speed*/}
			<div className={cx(classes.materialFormItem,
				{ [classes.focused]: focused.grndSpeed, [classes.hasValue]: grndSpeed })}>
				<label
					className={classes.materialFormLabel}
					htmlFor="grndSpeed"
				>
					Ground speed
				</label>
				<input
					id="grndSpeed"
					className={classes.materialFormField}
					onFocus={focusInput}
					onBlur={blurInput}
					type="number"
					name="grndSpeed"
					required
					{...bindGrndSpeed}
				/>
			</div>
		</fieldset>

		<fieldset>
			<input
				className={classes.button}
				type="submit"
				value="calculate"
			/>
			<input
				className={classes.button}
				type="reset"
				value="clear"
				onClick={clearResults}
			/>
		</fieldset>
	</form>
}

CalcForm.propTypes= {
	calculate: func.isRequired,
	clearResults: func.isRequired
}

export default CalcForm
