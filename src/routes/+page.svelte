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
	<!-- {@html themeStyles} -->
</svelte:head>

<div class="main">
	<h1>I'm learning <a href="https://svelte.dev/" target="_blank">Sveltekit!</a></h1>
	<div class="header">
		<div class="row">
			<div class="name">
				<div>Mike Mitchel</div>
				<small>Principal Consultant & Senior Software Developer</small>
			</div>

			<div class="socials">
				{#each resume.socials as social}
					<div class="link">{social.name}: {social.link}</div>
				{/each}
			</div>
		</div>

		<div class="row">
			<div class="bio">
				<div class="sub-section">{resume.bio.intro}</div>
			</div>
		</div>
	</div>

	<div class="row">
		<div class="left column">
			<div class="experience section">
				<h2>Experience</h2>
				{#each resume.experience as job}
					<div class="job-details sub-section">
						<div>{job.company}</div>
						<div>{job.role}</div>
						<div>{job.dates}</div>
					</div>
					<div class="sub-section">
						{#each job.highlights as highlight}
							<div class="sub-section">{highlight.item}</div>
						{/each}
						{#each job.projects as project}
							<div class="project sub-section">
								<div>Project: {project.name}</div>
								<div>Stack: {project.stack}</div>
							</div>
							<div class="project-details sub-section">
								<div>{project.details}</div>
							</div>
						{/each}
					</div>
				{/each}
			</div>
		</div>
		<div class="right column">
			<div class="section">
				<h2>Tech Skills</h2>
				<div class="skills sub-section">
					{#each resume.skills as skill}
						<div class="skill">
							{skill}
						</div>
					{/each}
				</div>
			</div>
			<div class="section">
				<h2>Soft Skills</h2>
				<div class="skills sub-section">
					{#each resume.softSkills as softSkill}
						<div class="skill">
							{softSkill}
						</div>
					{/each}
				</div>
			</div>
		</div>
	</div>
</div>

<style>
	.main {
		min-height: 100%;
		display: flex;
		flex-wrap: wrap;
		flex-direction: column;
	}

	.header {
		margin-bottom: 10px;
	}

	.info {
		display: flex;
		flex-direction: column;
	}

	.name {
		margin-right: auto;
	}

	.socials {
		margin-left: auto;
	}

	.section {
		margin-top: 1rem;
	}

	.sub-section {
		margin-top: 0.5rem;
	}

	.row {
		display: flex;
		flex-direction: row;
		column-gap: 20px;
	}

	.column {
		display: flex;
		flex-direction: column;
	}
	.right {
		flex: 1;
	}
	.left {
		flex: 2;
	}
	.skills {
		display: inline-flex;
		flex-wrap: wrap;
	}
	.skill::after {
		content: ',\00a0';
	}
	.skill:last-child:after {
		content: '';
	}
</style>
