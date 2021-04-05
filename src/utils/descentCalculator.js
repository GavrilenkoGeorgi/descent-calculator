// Top of descent calculator

export default class DescentCalculator {

	setParams (currAlt, desAlt, descRate, grndSpeed) {
		this.currAlt = currAlt
		this.desAlt = desAlt
		this.descRate = descRate // RoD
		this.grndSpeed = grndSpeed // GS
		this.altDiff = currAlt - desAlt
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

	paramsOK () {
		const difference = () => {
			return this.currAlt > this.desAlt ? true : false
		}
		const rate = () => {
			return this.descRate > 0 && this.descRate <= 4000 ? true : false
		}
		const speed = () => {
			return this.grndSpeed > 0 && this.grndSpeed <= 1234.8 ? true : false
		}

		const params = {
			difference: difference(),
			rate: rate(),
			speed: speed()
		}

		if (difference() && rate() && speed()) {
			return true
		} else {
			for (const param in params) {
				if (!params[param]) {
					console.log(`Check your ${param} input.`)
				}
			}
			return false
		}
	}

	getTOD () {
		const result = (this.altDiff / this.descRate) * (this.grndSpeed / 60)
		return result.toFixed(2)
	}

	getDescentTime () {
		return (this.altDiff / this.descRate).toFixed(2)
	}
}

/* const calculator = new DescentCalculator ()
calculator.setParams(10000, 3000, 750, 150)

console.log('Params OK:', calculator.paramsOK())
console.log(calculator.getParams())
console.log(`Descent time ${calculator.getDescentTime()}`)
console.log(`Top of descent ${calculator.getTOD()}`) */