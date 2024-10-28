<script lang="ts">
	import { theme } from '$lib/stores'
</script>

<div class="theme">
	<div class="label">theme</div>
	<select bind:value={$theme}>
		<option value="system">system</option>
		<option value="light">light</option>
		<option value="dark">dark</option>
	</select>
</div>

<style>
	.theme {
		display: flex;
		flex-direction: row;
		justify-content: flex-end;
		background: var(--backround);
		color: var(--color);
		margin-bottom: 5px;
	}

	select {
		background: var(--backround);
		color: var(--color);
	}

	.label::after {
		content: ':\00a0';
	}
</style>
