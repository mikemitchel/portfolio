<script lang="ts">
	import '../styles.css'

	export let data
	const theme = data.theme
	const resume = data.resume

	$: themeStyles = `
	<style class="theme-styles">
		:root {
			${Object.keys(theme).reduce((str: string, key: string) => {
				return str + `--${key}: ${theme[key]};` + '\n'
			}, '')}
		}
	</style>
	`
</script>

<svelte:head>
	<!-- eslint-disable-next-line -->
	{@html themeStyles}
</svelte:head>

<div class="main">
	<div class="bio">
		<div>{resume.bio.name}</div>
		<div>{resume.bio.intro}</div>
	</div>
	<div class="links>">
		{#each resume.socials as social}
			<div class="link">{social.name}: {social.link}</div>
		{/each}
	</div>
	<div class="experience-container">
		<div>Experience</div>
		{#each resume.experience as job}
			<div>{job.company}</div>
			<div>{job.dates}</div>
			<div>{job.role}</div>
			{#each job.highlights as highlight}
				<div>{highlight.item}</div>
			{/each}
			{#each job.projects as project}
				<div>Name: {project.name}</div>
				<div>Stack: {project.stack}</div>
				<div>{project.details}</div>
			{/each}
		{/each}
	</div>
	<div class="skills">
		{#each resume.skills as skill}
			{skill}
		{/each}
	</div>
	<div class="softSkills">
		{#each resume.softSkills as softSkill}
			{softSkill}
		{/each}
	</div>
	<div class="education">
		{#each resume.education as edu}
			<div>{edu.school}</div>
			<div>{edu.location}</div>
			<div>{edu.study}</div>
		{/each}
	</div>
</div>

<style>
	.container {
		min-height: 100%;
		display: flex;
		flex-wrap: wrap;
		flex-direction: row;
	}

	.top {
		margin-top: 20px;
		text-align: right;
	}
	.column {
		display: flex;
		flex-basis: calc(50% - 60px);
		flex-direction: column;
	}
	.row {
		display: flex;
		justify-content: center;
		flex-direction: row;
		gap: 10px;
	}
</style>
