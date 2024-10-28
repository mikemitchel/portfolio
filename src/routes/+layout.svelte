<script lang="ts">
	import '../styles.css'
	import { theme } from '$lib/stores'
	import ThemeSwitch from '$lib/components/ThemeSwitch.svelte'
	import { onMount } from 'svelte'

	onMount(() => {
		const startingTheme = window.matchMedia('(prefers-color-scheme: dark)') ? 'dark' : 'light'
		console.log('system theme', startingTheme)
		window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
			console.log(`changed to ${e.matches ? 'dark' : 'light'} mode`)
		})
	})
</script>

<svelte:head>
	<meta name="color-scheme" content={$theme == 'system' ? 'light dark' : $theme} />
	<link rel="stylesheet" href={`/theme/${$theme}.css`} />
</svelte:head>

<ThemeSwitch />

<slot />
