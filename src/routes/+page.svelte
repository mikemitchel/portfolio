<script lang="ts">
	import '../styles.css'
	let { data } = $props()
	const resume = data.resume
</script>

<div class="main">
	<div class="header">
		<div class="name">
			<h1>Mike Mitchel</h1>
			<small>Principal Consultant & Senior Software Developer</small>
		</div>

		<div class="socials">
			{#each resume.socials as social}
				<a class="social-link" href={social.link} target="_blank">
					<img alt="icon" class={`icon ${social.icon}-icon`} src={`${social.icon}.png`} />
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
