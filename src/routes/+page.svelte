<script lang="ts">
	import '../styles.css'

	let { data } = $props()
	const theme = data.theme
	const resume = data.resume

	let themeStyles = $derived(`
	<style class="theme-styles">
		:root {
			${Object.keys(theme).reduce((str: string, key: string) => {
				return str + `--${key}: ${theme[key]};` + '\n'
			}, '')}
		}
	</style>
	`)
</script>

<svelte:head>
	<!-- eslint-disable-next-line -->
	{@html themeStyles}
</svelte:head>

<div class="main">
	<div class="header">
		<div class="name">
			<h1>Mike Mitchel</h1>
			<small>Principal Consultant & Senior Software Developer</small>
		</div>

		<div class="socials">
			{#each resume.socials as social}
				<a class="social-link" href={social.link} target="_blank">
					<img alt="icon" class="icon" src={social.icon} />
					<span class="link">{social.link}</span>
				</a>
			{/each}
		</div>
	</div>

	<div class="row">
		<div class="bio">
			<div class="sub-section">{resume.bio.intro}</div>
		</div>
	</div>

	<main class="row">
		<div class="left column">
			<div class="experience section">
				<h2>Experience</h2>
				{#each resume.experience as job}
					<div class="job-details sub-section">
						<h3>{job.company}</h3>
						<div>{job.role}</div>
						<div>{job.dates}</div>
					</div>
					<div class="sub-section">
						{#each job.highlights as highlight}
							<div class="sub-section">{highlight.item}</div>
						{/each}
						{#each job.projects as project}
							<div class="sub-section">
								<div class="project">
									<h4>Project</h4>
									{project.details}
								</div>
								<div class="stack">
									<h4>Stack</h4>
									{project.stack}
								</div>
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
	</main>
</div>

<style>
	h1 {
		align-self: center;
	}
	h1,
	h2,
	h3,
	h4 {
		margin: 0px;
	}
	h4 {
		float: left;
	}
	h4::after {
		content: ':\00a0';
	}
	.social-link {
		display: flex;
		align-items: center;
		gap: 0.25em;
	}
	.main {
		min-height: 100%;
		display: flex;
		flex-wrap: wrap;
		flex-direction: column;
	}

	.header {
		display: flex;
		flex-direction: row;
		align-items: center;
		margin-bottom: 10px;
	}

	.name {
		margin-right: auto;
	}

	.socials {
		margin-left: auto;
	}

	.icon {
		width: 1em;
	}

	@media (max-width: 700px) {
		.link {
			display: none;
		}
		main.row {
			display: block;
		}
		.social-link {
			display: block;
		}
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
		column-gap: 10px;
	}

	.column {
		display: flex;
		flex-direction: column;
	}
	.right {
		flex-basis: 20ch;
		flex-shrink: 0;
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
