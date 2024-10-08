export const theme: Record<string, string> = {
	/* font and text */
	'font-body': `Arial, -apple-system, BlinkMacSystemFont, 'Open Sans', sans-serif`,
	'font-mono': `'Fira Mono', monospace`,
	'font-size': `10px`,
	'color-text': `#323336`,
	'color-text-light': `#dde9f8`,
	/* main colors */
	/* removal of rgb() wrapper allows adding opactiy in the app */
	'color-primary': `64, 117, 166 ` /* #4075a6 */,
	'color-secondary': `64, 117, 166` /* #40A6A4 */,
	'color-neutral': `250, 250, 250`,
	'color-success': 'rgb(15 186 129)',
	'color-warning': 'rgb(167 127 6)',
	'color-error': 'rgb(220 20 60)',
	/* accent */
	'color-accent': `#a348e9`,
	'color-accent-subtle': `#e9ecef`,
	'color-accent-med': `rgb(132, 165, 197)`,
	/* background */
	'color-bg-lighter': 'rgb(240, 241, 246)',
	'color-bg-light': 'rgb(202, 216, 228)',
	'color-bg-med': 'rgb(132, 165, 197)',
	'color-bg-dark': 'rgb(36, 46, 66)',
	/* layout */
	'column-width': '42rem',
	'column-margin-top': '4rem',
	'border-radius': '6px'
}
