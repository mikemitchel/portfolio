import { resume } from '$lib/index'
import { theme } from '$lib/stores'

/** @type {import('./$types').PageLoad} */
export function load() {
	return {
		resume,
		theme
	}
}
