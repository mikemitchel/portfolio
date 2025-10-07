<script lang="ts">
	import '../styles.css'
	let { data } = $props()
	const resume = data.resume
</script>

<a href="#main-content" class="skip-link">Skip to main content</a>
<div class="main">
	<header class="header">
		<div class="name">
			<h1>Mike Mitchel</h1>
			<small>Principal Consultant | Full Stack Engineer</small>
		</div>

		<div class="socials">
			{#each resume.socials as social}
				<a class="social-link" href={social.link} target="_blank" rel="noopener noreferrer" aria-label={`Visit my ${social.icon} profile`}>
					<img alt={`${social.icon} logo`} class={`icon ${social.icon}-icon`} src={`${social.icon}.png`} />
					<span class="link">{social.link}</span>
				</a>
			{/each}
		</div>
	</header>

	<section class="row" aria-label="Biography">
		<div class="bio">
			<div class="sub-section">{resume.bio.intro}</div>
		</div>
	</section>

	<main id="main-content" class="row">
		<div class="left column">
			<section class="experience section" aria-labelledby="experience-heading">
				<h2 id="experience-heading">Experience</h2>
				{#each resume.experience as job}
					<div class="job-details sub-section">
						<span class="company">
							<h3>{job.company}</h3>
							<small>{job.location}</small>
						</span>

						<h4>{job.role}</h4>
						<small>({job.dates})</small>
					</div>
					<div class="highlights sub-section">
						{#each job.highlights as highlight}
							<div class="sub-section">{highlight.item}</div>
						{/each}
						{#each job.projects as project}
							<div class="sub-section">
								<div class="project">
									<h4 class="semi-colon">Project</h4>
									{project.details}
								</div>
								<div class="stack">
									<h4 class="semi-colon">Stack</h4>
									{project.stack}
								</div>
							</div>
						{/each}
					</div>
				{/each}
			</section>
		</div>
		<div class="right column">
			<section class="section" aria-labelledby="tech-skills-heading">
				<h2 id="tech-skills-heading">Tech Skills</h2>
				<div class="skills sub-section">
					{#each resume.skills as skill}
						<div class="skill">
							{skill}
						</div>
					{/each}
				</div>
			</section>
			<section class="section" aria-labelledby="soft-skills-heading">
				<h2 id="soft-skills-heading">Soft Skills</h2>
				<div class="skills sub-section">
					{#each resume.softSkills as softSkill}
						<div class="skill">
							{softSkill}
						</div>
					{/each}
				</div>
			</section>
		</div>
	</main>
</div>

<style>
	.skip-link {
		position: absolute;
		top: -40px;
		left: 0;
		background: var(--link);
		color: var(--background);
		padding: 8px;
		text-decoration: none;
		z-index: 100;
	}
	.skip-link:focus {
		top: 0;
	}

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
	.semi-colon::after {
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
	@media (prefers-color-scheme: dark) {
		img.github-icon {
			-webkit-filter: invert(1);
			filter: invert(1);
		}
	}

	@media (max-width: 700px) {
		.link {
			display: none;
		}
		main.row {
			display: flex;
			flex-direction: column-reverse;
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
	.company {
		display: flex;
		flex-direction: row;
		align-items: baseline;
		gap: 10px;
	}
	.job-details {
		display: flex;
		flex-direction: column;
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
