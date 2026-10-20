<script lang="ts">
	import PageBanner from '#lib/components/PageBanner.svelte';
	import { studioStrip } from '#lib/data/live.js';
	import { live } from '#lib/data/live.js';
</script>

<svelte:head>
	<title>Studio · FAUVES</title>
	<meta
		name="description"
		content="Fauves Studio — process, artwork, and behind the scenes in San José, Costa Rica."
	/>
</svelte:head>

<section class="studio">
	<PageBanner
		kicker="studio · san josé"
		title="Process,"
		accent="behind the scenes."
		lede="Private studio visits by appointment only. Wet paint, masks, unfinished walls."
	/>

	<div class="lead">
		<figure class="main">
			<img src={live.studioFloor.src} alt={live.studioFloor.alt} />
			<img class="drip" src="/art/drip-overlay.svg" alt="" aria-hidden="true" />
		</figure>
		<div class="aside">
			<p class="hand">Mask on. Ego off — but this page is the floor, not the manifesto.</p>
			<p>
				John Paul Fauves creates original contemporary artwork in Costa Rica for private collectors
				and interiors. The studio is the engine: cut, layer, stamp, drip.
			</p>
			<a href="/contact">book a visit</a>
		</div>
	</div>

	<div class="strip" aria-label="Studio stills from the live site">
		{#each studioStrip as shot, i (shot.id)}
			<figure style:--rot="{[-2.5, 1.8, -1.4, 2.2, -1.9][i]}deg">
				<img src={shot.src} alt={shot.alt} loading="lazy" />
			</figure>
		{/each}
	</div>
</section>

<style>
	.studio {
		padding-bottom: clamp(3rem, 8vh, 5rem);
		background: var(--void);
		color: var(--cream);
	}

	.studio :global(.banner) {
		color: var(--cream);
	}

	.studio :global(.kicker) {
		color: var(--yellow);
	}

	.studio :global(.accent) {
		color: var(--pink);
	}

	.studio :global(.lede) {
		opacity: 0.85;
	}

	.lead {
		width: min(100%, 74rem);
		margin: 0 auto;
		padding: 0 clamp(0.75rem, 2vw, 1.5rem);
		display: grid;
		grid-template-columns: 1.35fr 0.85fr;
		gap: 1rem;
		align-items: end;
	}

	.main {
		margin: 0;
		position: relative;
		overflow: hidden;
		transform: rotate(-1.2deg);
		clip-path: polygon(0 0, 100% 1.5%, 98.5% 100%, 1% 97%);
		box-shadow: 0 24px 60px rgba(0, 0, 0, 0.45);
	}

	.main img:first-child {
		width: 100%;
		aspect-ratio: 3 / 2;
		object-fit: cover;
	}

	.drip {
		position: absolute;
		inset: 0;
		width: 100%;
		height: 100%;
		object-fit: cover;
		opacity: 0.22;
		mix-blend-mode: multiply;
		pointer-events: none;
	}

	.aside {
		padding: 1.1rem 1rem;
		background: color-mix(in oklab, var(--cream) 10%, transparent);
		border-left: 3px solid var(--yellow);
		transform: rotate(1deg);
	}

	.hand {
		margin: 0 0 0.7rem;
		font-family: var(--font-hand);
		font-size: 1.5rem;
		color: var(--yellow);
		line-height: 1.15;
	}

	.aside p:nth-child(2) {
		margin: 0 0 1rem;
		opacity: 0.88;
	}

	.aside a {
		display: inline-flex;
		padding: 0.65rem 0.95rem;
		font-family: var(--font-stamp);
		font-size: 0.9rem;
		letter-spacing: 0.05em;
		text-transform: uppercase;
		background: var(--yellow);
		color: var(--ink);
	}

	.aside a:hover {
		background: var(--pink);
		color: var(--cream);
	}

	.strip {
		width: min(100%, 78rem);
		margin: 1.75rem auto 0;
		padding: 0 clamp(0.6rem, 2vw, 1.25rem);
		display: grid;
		grid-template-columns: repeat(5, 1fr);
		gap: 0.65rem;
	}

	.strip figure {
		margin: 0;
		overflow: hidden;
		background: var(--charcoal);
		transform: rotate(var(--rot));
		clip-path: polygon(0 1.5%, 100% 0, 98% 100%, 1% 97%);
		box-shadow: 6px 10px 24px rgba(0, 0, 0, 0.35);
	}

	.strip img {
		width: 100%;
		aspect-ratio: 1;
		object-fit: cover;
	}

	@media (max-width: 900px) {
		.lead {
			grid-template-columns: 1fr;
		}

		.strip {
			grid-template-columns: repeat(2, 1fr);
		}
	}
</style>
