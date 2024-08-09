<script lang="ts">
	import '../styles.css'

	export let data
	const theme = data.theme

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
	<table>
		<tbody class="container">
			<tr class="row">
				<td class="column">
					<p>
						<span>Mike Mitchel</span>
					</p>
					<p>
						<span
							>Highly skilled Senior Developer with 8 years of expertise in software development and
							a passion for crafting best practices code that delivers exceptional results.
						</span>
					</p>
				</td>
				<td class="column">
					<p>
						<span
							><a
								href="https://www.google.com/url?q=http://linkedin.com/in/mikemitchel&sa=D&source=editors&ust=1701106343458640&usg=AOvVaw0cQEVJsxXwm_4PFPnQmCss"
								>linkedin.com/in/mikemitchel</a
							></span
						>
					</p>
					<p>
						<span
							><a
								href="https://www.google.com/url?q=http://github.com/mikemitchel&sa=D&source=editors&ust=1701106343459478&usg=AOvVaw1f3_EIljrXr9QzAjWeCCKL"
								>github.com/mikemitchel</a
							></span
						>
					</p>
					<p>
						<span><a href="mailto:mike@mikemitchel.com">mike@mikemitchel.com</a></span>
					</p>
					<p><span>(312) 344-0036</span></p>
				</td>
			</tr>
			<tr class="row">
				<td class="column">
					<h1>
						<span>EXPERIENCE</span>
					</h1>
					<h2>
						<span>Principal Consultant / Senior Developer</span><span>&nbsp;</span><span
							>– <br />Bitovi,
						</span><span>Chicago, IL (Remote)</span>
					</h2>
					<h3>
						<span>June 2016 - Dec 2022</span>
					</h3>
					<p>
						<span>Managed multiple client projects</span>
					</p>
					<ul>
						<li>
							<span
								>Guided successful projects as the Principal Consultant for client stakeholders,
								delivering high value software and tooling.</span
							>
						</li>
						<li>
							<span>Managed and mentored team members as a Senior Team Lead</span>
						</li>
						<li>
							<span>Performed resource management and technical recruiting interviews</span>
						</li>
					</ul>
					<p>
						<span>Championed and delivered best practices code</span>
					</p>
					<ul>
						<li>
							<span>Delivered clean, readable, and maintainable code complete with tests</span>
						</li>
						<li>
							<span>Automated testing via Continuous Integration and Deployment</span>
						</li>
						<li>
							<span>Maintained documentation and best practices for the codebase</span>
						</li>
					</ul>
					<p><span>Client Projects</span></p>
					<ul>
						<li>
							<span>KFC.com</span><span
								>&nbsp;– customer order app (React, Typescript, Jest, NextJS), Refactored the entire
								web app, improving test coverage by 30%.</span
							>
						</li>
						<li>
							<span>A2JAuthor.com </span><span
								>- multi-repo Access to Justice &nbsp;application with nearly 1 million runs per
								year (CanJS, NodeJS, PHP, AMP stack), Full stack development across a suite of 3
								applications, Authoring Tool, Viewing Tool, and Document Assembly Tool</span
							>
						</li>
						<li>
							<span>Epiqar.com</span><span
								>&nbsp;– Medical video conference app for remote surgery and medical sales (full
								stack - CanJS, NodeJS), Added high-quality snapshot feature allowing doctors to
								capture key moments including on-screen annotations.</span
							>
						</li>
						<li>
							<span>CanJS.com</span><span>&nbsp;- open source MVVM framework contributor</span>
						</li>
					</ul>
					<h2>
						<span>Instructor &nbsp;– </span><span>Makersquare</span><span>, </span><span
							>Austin, TX</span
						>
					</h2>
					<h3>
						<span>Feb 2016 - May 2016</span>
					</h3>
					<ul>
						<li>
							<span
								>Assistant Instructor to 2 boot camp cohorts, teaching the same fundamentals I had
								just learned as well as developing an internal staffing app to record and manage
								student instructor hours</span
							>
						</li>
					</ul>
					<h2>
						<span>Owner / President – </span><span>Lab9 Inc.</span><span>, </span><span
							>Chicago, IL</span
						>
					</h2>
					<h3>
						<span>June 2009 - June 2016</span>
					</h3>
					<ul>
						<li>
							<span
								>Built a successful IT consulting business by delivering exceptional service,
								creating a strong referral pipeline</span
							>
						</li>
						<li>
							<span>Managed every aspect of the business while being the principal consultant</span>
						</li>
						<li>
							<span>Sold the client list to pursue web development</span>
						</li>
					</ul>
					<p><span /></p>
				</td>
				<td class="column">
					<h1>
						<span>EDUCATION</span>
					</h1>
					<ul>
						<li>
							<span>Makersquare, Dev Bootcamp</span><span
								>, Austin, TX<br />60 hr/week intensive Web Development bootcamp that involved best
								practices fundamentals and building a greenfield project utilizing the YouTube API.</span
							>
						</li>
					</ul>
					<h1>
						<span>SKILLS</span>
					</h1>
					<p>
						<span
							>Javascript, NodeJS, ReactJS, Typescript, NextJS, GIT, PHP, Jest, Mocha, Chai, HTML5,
							CSS3, LESS, SCSS, jQuery, Storybook, Docker, and AWS S3</span
						>
					</p>
					<h1>
						<span>SOFT SKILLS</span>
					</h1>
					<p>
						<span
							>Strong Written and Verbal Communication, Emotional Intelligence, Stakeholder and
							Product Owner Liaison, Project Management, Team Mentoring, Code Review, Consulting,
							Agile Planning, Motivated Lifelong Learner</span
						>
					</p>
				</td>
			</tr>
		</tbody>
	</table>
</div>

<style>
	.container {
		min-height: 100%;
		display: flex;
		flex-wrap: wrap;
		flex-direction: row;
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
		gap: 60px;
	}
</style>
