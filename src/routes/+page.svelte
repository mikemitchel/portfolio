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
					<h1>Mike Mitchel</h1>
					<p>
						Highly skilled Senior Developer with 8 years of expertise in software development and a
						passion for crafting best practices code that delivers exceptional results.
					</p>
				</td>
				<td class="column top">
					<a
						href="https://www.google.com/url?q=http://linkedin.com/in/mikemitchel&sa=D&source=editors&ust=1701106343458640&usg=AOvVaw0cQEVJsxXwm_4PFPnQmCss"
						>linkedin.com/in/mikemitchel</a
					>

					<a
						href="https://www.google.com/url?q=http://github.com/mikemitchel&sa=D&source=editors&ust=1701106343459478&usg=AOvVaw1f3_EIljrXr9QzAjWeCCKL"
						>github.com/mikemitchel</a
					>
					<p>
						<a href="mailto:mike@mikemitchel.com">mike@mikemitchel.com</a>
					</p>
				</td>
			</tr>
			<tr class="row">
				<td class="column">
					<h2>EXPERIENCE</h2>
					<h3>
						Principal Consultant / Senior Developer&nbsp;<br />Bitovi (Chicago, IL Remote)
					</h3>
					<h4>June 2016 - Dec 2022</h4>
					<p>Managed multiple client projects</p>
					<ul>
						<li>
							Guided successful projects as the Principal Consultant for client stakeholders,
							delivering high value software and tooling.
						</li>
						<li>Managed and mentored team members as a Senior Team Lead</li>
						<li>Performed resource management and technical recruiting interviews</li>
					</ul>
					<p>Championed and delivered best practices code</p>
					<ul>
						<li>Delivered clean, readable, and maintainable code complete with tests</li>
						<li>Automated testing via Continuous Integration and Deployment</li>
						<li>Maintained documentation and best practices for the codebase</li>
					</ul>
					<p>Client Projects</p>
					<ul>
						<li>
							KFC.com – customer order app (React, Typescript, Jest, NextJS), Refactored the entire
							web app, improving test coverage by 30%.
						</li>
						<li>
							A2JAuthor.com - multi-repo Access to Justice &nbsp;application with nearly 1 million
							runs per year (CanJS, NodeJS, PHP, AMP stack), Full stack development across a suite
							of 3 applications, Authoring Tool, Viewing Tool, and Document Assembly Tool
						</li>
						<li>
							Epiqar.com – Medical video conference app for remote surgery and medical sales (full
							stack - CanJS, NodeJS), Added high-quality snapshot feature allowing doctors to
							capture key moments including on-screen annotations.
						</li>
						<li>CanJS.com&nbsp;- open source MVVM framework contributor</li>
					</ul>
					<h3>Instructor &nbsp;<br />Makersquare (Austin, TX)</h3>
					<h4>Feb 2016 - May 2016</h4>
					<ul>
						<li>
							Assistant Instructor to 2 boot camp cohorts, teaching the same fundamentals I had just
							learned as well as developing an internal staffing app to record and manage student
							instructor hours
						</li>
					</ul>
					<h3>Founder & Principal Consultant&nbsp;<br />Lab9 Inc (Chicago, IL)</h3>
					<h4>June 2009 - June 2016</h4>
					<ul>
						<li>
							Built a successful IT consulting business by delivering exceptional service, creating
							a strong referral pipeline
						</li>
						<li>Managed every aspect of the business while being the principal consultant</li>
						<li>Sold the client list to pursue web development</li>
					</ul>
				</td>
				<td class="column">
					<h2>EDUCATION</h2>
					<ul>
						<li>
							Makersquare, Dev Bootcamp, Austin, TX
							<br />60 hr/week intensive Web Development bootcamp that involved best practices
							fundamentals and building a greenfield project utilizing the YouTube API.
						</li>
					</ul>
					<h2>SKILLS</h2>
					<p>
						Javascript, NodeJS, ReactJS, Typescript, NextJS, GIT, PHP, Jest, Mocha, Chai, HTML5,
						CSS3, LESS, SCSS, PostGreSQL, MySQL, MongoDB, jQuery, Storybook, Docker, and AWS S3
					</p>
					<h2>SOFT SKILLS</h2>
					<p>
						Strong Written and Verbal Communication, Emotional Intelligence, Stakeholder and Product
						Owner Liaison, Project Management, Team Mentoring, Code Review, Consulting, Agile
						Planning, Motivated Lifelong Learner
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
		gap: 30px;
	}
</style>
