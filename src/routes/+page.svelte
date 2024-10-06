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
	<h1>Mike Mitchel - Principal Consultant & Senior Software Developer</h1>
	<div class="blurb row">
		<div class="bio section">
			<div class="sub-section">{resume.bio.intro}</div>
		</div>
	</div>
	<div class="row">
		<div class="column">
			<div class="links section">
				<div>Sites</div>
				<div class="sub-section">
					{#each resume.socials as social}
						<div class="link">{social.name}: {social.link}</div>
					{/each}
				</div>
			</div>
			<div class="skills section">
				<div>Skills</div>
				{#each resume.skills as skill}
					{skill}
				{/each}
			</div>
			<div class="softSkills section">
				<div>Soft Skills</div>
				{#each resume.softSkills as softSkill}
					{softSkill}
				{/each}
			</div>
			<div class="education section">
				<div>Education</div>
				{#each resume.education as edu}
					<div>{edu.school}</div>
					<div>{edu.location}</div>
					<div>{edu.study}</div>
				{/each}
			</div>
		</div>
		<div class="column">
			<div class="experience section">
				<div>Experience</div>
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
	</div>
</div>

<style>
	.main {
		min-height: 100%;
		display: flex;
		flex-wrap: wrap;
		flex-direction: column;
		justify-content: flex-start;
	}

	.blurb {
		margin-bottom: 10px;
	}

	.section {
		margin-top: 2rem;
	}

	.sub-section {
		margin-top: 1rem;
	}

	.row {
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		width: 100%;
	}

	.top {
		margin-top: 20px;
		text-align: right;
	}
	.column {
		display: flex;
		flex-direction: column;
		flex-basis: 100%;
		flex: 1;
	}
</style>
