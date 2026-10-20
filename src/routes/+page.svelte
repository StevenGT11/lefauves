<script lang="ts">
	import Hero from '#lib/components/Hero.svelte';
	import { homeGates } from '#lib/data/site.js';
	import { live } from '#lib/data/live.js';
</script>

<svelte:head>
	<title>FAUVES · John Paul Fauves</title>
</svelte:head>

<Hero />

<section class="gates" aria-label="Enter the site">
	<header class="head">
		<p class="kicker">enter the site</p>
		<h2>
			<span>Same paint.</span>
			<span class="accent">More rooms.</span>
		</h2>
		<p class="lede">
			Landing stays loud — each page does one job. Collections, story, studio, commissions, events,
			contact.
		</p>
	</header>

	<div class="grid">
		{#each homeGates as gate, i (gate.href)}
			<a class="card" href={gate.href} style:--rot="{gate.rot}deg" style:--i={i}>
				<p class="tag">{gate.kicker}</p>
				<strong>{gate.title}</strong>
				<span>{gate.note}</span>
			</a>
		{/each}
	</div>

	<figure class="scrap">
		<img src={live.homeWorkA.src} alt={live.homeWorkA.alt} />
		<img class="drip" src="/art/drip-overlay.svg" alt="" aria-hidden="true" />
	</figure>
</section>

<style>
	.gates {
		position: relative;
		padding: clamp(2.5rem, 7vh, 4rem) clamp(0.75rem, 2.5vw, 1.5rem) clamp(3rem, 8vh, 5rem);
		background: var(--canvas);
		overflow: clip;
	}

	.head {
		width: min(100%, 72rem);
		margin: 0 auto 1.5rem;
		position: relative;
		z-index: 2;
	}

	.kicker {
		margin: 0 0 0.3rem;
		font-family: var(--font-hand);
		font-size: 1.35rem;
		color: var(--blood);
		transform: rotate(-2deg);
		transform-origin: left;
	}

	h2 {
		margin: 0;
		font-family: var(--font-stamp);
		font-size: clamp(2.2rem, 6.5vw, 4rem);
		line-height: 0.9;
		text-transform: uppercase;
	}

	h2 span {
		display: block;
	}

	.accent {
		color: var(--pink);
		transform: rotate(-1.2deg);
	}

	.lede {
		margin: 0.75rem 0 0;
		max-width: 34rem;
		opacity: 0.8;
	}

	.grid {
		position: relative;
		z-index: 2;
		width: min(100%, 72rem);
		margin: 0 auto;
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		gap: 0.85rem;
	}

	.card {
		display: grid;
		gap: 0.35rem;
		padding: 1rem 0.95rem 1.15rem;
		background: var(--cream);
		border: 2px solid color-mix(in oklab, var(--ink) 40%, transparent);
		box-shadow: 6px 8px 0 color-mix(in oklab, var(--ink) 16%, transparent);
		transform: rotate(var(--rot));
		clip-path: polygon(0 1.5%, 100% 0, 98.5% 100%, 1% 97%);
		transition:
			transform 0.2s var(--ease),
			background 0.2s ease;
	}

	.card:nth-child(2n) {
		background: var(--ink);
		color: var(--cream);
		border-color: transparent;
	}

	.card:nth-child(3n) {
		background: color-mix(in oklab, var(--azure) 88%, var(--cream));
		color: var(--cream);
		border-color: transparent;
	}

	.card:hover {
		transform: rotate(0deg) translateY(-4px);
		background: var(--yellow);
		color: var(--ink);
	}

	.tag {
		margin: 0;
		font-family: var(--font-hand);
		font-size: 1.1rem;
		opacity: 0.85;
	}

	.card strong {
		font-family: var(--font-stamp);
		font-size: clamp(1.25rem, 2.5vw, 1.6rem);
		text-transform: uppercase;
		letter-spacing: 0.02em;
		font-weight: 400;
	}

	.card span {
		font-size: 0.92rem;
		opacity: 0.85;
		line-height: 1.35;
	}

	.scrap {
		margin: 0;
		position: absolute;
		right: -2%;
		bottom: 6%;
		width: min(28%, 14rem);
		aspect-ratio: 3 / 4;
		overflow: hidden;
		transform: rotate(7deg);
		clip-path: polygon(2% 0, 100% 2%, 97% 100%, 0 96%);
		box-shadow: 12px 18px 40px rgba(0, 0, 0, 0.25);
		opacity: 0.7;
		pointer-events: none;
		z-index: 1;
	}

	.scrap img:first-child {
		width: 100%;
		height: 100%;
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
	}

	@media (max-width: 900px) {
		.grid {
			grid-template-columns: repeat(2, 1fr);
		}

		.scrap {
			display: none;
		}
	}

	@media (max-width: 560px) {
		.grid {
			grid-template-columns: 1fr;
		}

		.card {
			transform: none;
		}
	}
</style>
