import { arrayOf, node, oneOfType, shape, string } from 'prop-types'

export const children = oneOfType([
	arrayOf(node),
	node
])

export const person = shape({
	name: string.isRequired,
	birth_year: string.isRequired
})
