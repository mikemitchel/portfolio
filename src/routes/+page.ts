import { theme } from '../theme'
import { resume } from '$lib/index'

/** @type {import('./$types').PageLoad} */
export function load() {
	return {
		theme,
		resume
	}
}
