<script lang="ts">
	let {
		kicker,
		title,
		accent,
		lede
	}: {
		kicker: string;
		title: string;
		accent?: string;
		lede?: string;
	} = $props();
</script>

<header class="banner">
	<p class="kicker">{kicker}</p>
	<h1>
		<span>{title}</span>
		{#if accent}<span class="accent">{accent}</span>{/if}
	</h1>
	{#if lede}
		<p class="lede">{lede}</p>
	{/if}
</header>

<style>
	.banner {
		width: min(100%, 72rem);
		margin: 0 auto;
		padding: 6.5rem clamp(0.9rem, 3vw, 2rem) 1.25rem;
	}

	.kicker {
		margin: 0 0 0.35rem;
		font-family: var(--font-hand);
		font-size: 1.4rem;
		color: var(--pink);
		transform: rotate(-2deg);
		transform-origin: left;
	}

	h1 {
		margin: 0;
		font-family: var(--font-stamp);
		font-size: clamp(2.6rem, 8vw, 5rem);
		line-height: 0.9;
		text-transform: uppercase;
	}

	h1 span {
		display: block;
	}

	.accent {
		color: var(--yellow);
		transform: rotate(-1.4deg);
		text-shadow:
			3px 4px 0 var(--ink),
			-1px -1px 0 var(--pink);
	}

	.lede {
		margin: 0.85rem 0 0;
		max-width: 36rem;
		font-size: 1.08rem;
		opacity: 0.82;
	}
</style>
