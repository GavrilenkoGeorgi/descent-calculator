// Top of descent calculator

export default class DescentCalculator {

	setParams ({ currAlt, desAlt, descRate, grndSpeed }) {
		this.currAlt = Number(currAlt)
		this.desAlt = Number(desAlt)
		this.descRate = Number(descRate) // RoD
		this.grndSpeed = Number(grndSpeed) // GS
		this.altDiff = currAlt - desAlt

		return this
	}

	getParams () {
		return {
			currentAltitude: this.currAlt,
			destinationAltitude: this.desAlt,
			descentRate: this.descRate,
			groundSpeed: this.grndSpeed,
			altitudeDifference: this.altDiff
		}
	}

	errors () {
		const difference = () => {
			return this.currAlt > this.desAlt ? true : false
		}
		const rate = () => {
			return this.descRate > 0 && this.descRate <= 4000 ? true : false
		}
		const speed = () => {
			return this.grndSpeed > 0 && this.grndSpeed <= 1234.8 ? true : false
		}

		const errors = []
		const params = {
			difference: difference(),
			rate: rate(),
			speed: speed()
		}

		for (const param in params) {
			if (!params[param]) {
				errors.push(`Check your ${param} input.`)
			}
		}
		return errors
	}

	getResults () {
		if (!this.errors().length) {
			const results = {
				ToD: this.getTOD(),
				descentTime: this.getDescentTime()
			}
			return results
		} else return null
	}

	getTOD () {
		const result = (this.altDiff / this.descRate) * (this.grndSpeed / 60)
		return Math.round(result)
	}

	getDescentTime () {
		return Math.round(this.altDiff / this.descRate)
	}
}
