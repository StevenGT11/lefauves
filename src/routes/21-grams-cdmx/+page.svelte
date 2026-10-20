<script lang="ts">
	import PageBanner from '#lib/components/PageBanner.svelte';
	import { live } from '#lib/data/live.js';
</script>

<svelte:head>
	<title>21 Grams CDMX · FAUVES</title>
	<meta
		name="description"
		content="21 Grams CDMX — solo show by John Paul Fauves. Memoria, inocencia, máscaras."
	/>
</svelte:head>

<section class="grams">
	<PageBanner
		kicker="solo show"
		title="21 Grams"
		accent="· CDMX"
		lede="Upcoming solo show energy — memoria, inocencia, máscaras."
	/>

	<figure class="poster">
		<img src={live.gramsPoster.src} alt={live.gramsPoster.alt} />
		<img class="drip" src="/art/drip-overlay.svg" alt="" aria-hidden="true" />
		<p class="hand" aria-hidden="true">THIS IS A DREAM</p>
	</figure>

	<p class="cta-row">
		<a href="/upcoming-events">all events</a>
		<a class="ghost" href="/contact">request access</a>
	</p>
</section>

<style>
	.grams {
		padding-bottom: clamp(3rem, 8vh, 5rem);
		background: var(--void);
		color: var(--cream);
	}

	.grams :global(.banner) {
		color: var(--cream);
	}

	.grams :global(.kicker) {
		color: var(--yellow);
	}

	.grams :global(.accent) {
		color: var(--pink);
	}

	.poster {
		position: relative;
		width: min(100%, 36rem);
		margin: 0 auto;
		padding: 0 1rem;
	}

	.poster > img:first-child {
		width: 100%;
		display: block;
		transform: rotate(-1.5deg);
		clip-path: polygon(0 1%, 100% 0, 98% 100%, 1% 97%);
		box-shadow: 0 28px 70px rgba(0, 0, 0, 0.5);
	}

	.drip {
		position: absolute;
		inset: 0 1rem;
		width: calc(100% - 2rem);
		height: 100%;
		object-fit: cover;
		opacity: 0.2;
		mix-blend-mode: multiply;
		pointer-events: none;
	}

	.hand {
		position: absolute;
		left: 8%;
		bottom: 8%;
		margin: 0;
		font-family: var(--font-hand);
		font-size: clamp(1.8rem, 5vw, 2.6rem);
		color: var(--yellow);
		transform: rotate(-6deg);
		text-shadow: 2px 3px 0 rgba(0, 0, 0, 0.55);
	}

	.cta-row {
		width: min(100%, 36rem);
		margin: 1.75rem auto 0;
		padding: 0 1rem;
		display: flex;
		flex-wrap: wrap;
		gap: 0.65rem;
	}

	.cta-row a {
		padding: 0.7rem 1.05rem;
		font-family: var(--font-stamp);
		letter-spacing: 0.05em;
		text-transform: uppercase;
		background: var(--yellow);
		color: var(--ink);
		transform: rotate(-1deg);
	}

	.cta-row a:hover {
		background: var(--pink);
		color: var(--cream);
	}

	.ghost {
		background: transparent !important;
		color: var(--cream) !important;
		border: 2px solid color-mix(in oklab, var(--cream) 70%, transparent);
	}
</style>
