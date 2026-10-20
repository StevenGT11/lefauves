<script lang="ts">
	import PageBanner from '#lib/components/PageBanner.svelte';
	import { artistBeats } from '#lib/data/site.js';
	import { live } from '#lib/data/live.js';
</script>

<svelte:head>
	<title>Artist Story · FAUVES</title>
	<meta
		name="description"
		content="John Paul Fauves — Costa Rica based contemporary artist. Raw, alive, deeply human."
	/>
</svelte:head>

<section class="story">
	<PageBanner
		kicker="artist story"
		title="Raw. Alive."
		accent="Deeply human."
		lede="Costa Rica based contemporary artist — bold characters, expressive color, urban texture, distorted emotion."
	/>

	<div class="stage">
		<figure class="hero-shot">
			<img src={live.artistStoryHero.src} alt={live.artistStoryHero.alt} />
			<img class="drip" src="/art/drip-overlay.svg" alt="" aria-hidden="true" />
			<p class="stamp" aria-hidden="true">MASK ON</p>
		</figure>

		<figure class="wide">
			<img src={live.artistStoryWide.src} alt={live.artistStoryWide.alt} />
		</figure>

		<div class="copy">
			<p class="hand">
				Fauves does not create quiet decoration. His work is made to shift the energy of a room,
				start conversations, and connect with collectors who are drawn to art with identity,
				tension, and soul.
			</p>
			<p>
				His visual language is built through instinct — symbols that feel both playful and intense.
				Each piece carries movement, contradiction, and presence.
			</p>
		</div>
	</div>

	<div class="beats">
		{#each artistBeats as beat, i (beat.year)}
			<article style:--rot="{[-2, 1.5, -1.2][i]}deg">
				<p class="year">{beat.year}</p>
				<h2>{beat.title}</h2>
				<p>{beat.body}</p>
			</article>
		{/each}
	</div>

	<p class="cta-row">
		<a href="/collections">see collections</a>
		<a class="ghost" href="/contact">collector inquiry</a>
	</p>
</section>

<style>
	.story {
		padding-bottom: clamp(3rem, 8vh, 5rem);
		background:
			radial-gradient(ellipse at 80% 10%, color-mix(in oklab, var(--pink) 12%, transparent), transparent 45%),
			var(--canvas);
	}

	.stage {
		width: min(100%, 74rem);
		margin: 0 auto;
		padding: 0 clamp(0.75rem, 2vw, 1.5rem);
		display: grid;
		grid-template-columns: 1.1fr 0.9fr;
		gap: 1rem;
		align-items: start;
	}

	.hero-shot,
	.wide {
		margin: 0;
		position: relative;
		overflow: hidden;
		background: var(--void);
		box-shadow: 12px 18px 40px rgba(0, 0, 0, 0.22);
	}

	.hero-shot {
		grid-row: span 2;
		transform: rotate(-1.4deg);
		clip-path: polygon(0 0, 100% 1.5%, 98% 100%, 1% 97%);
	}

	.wide {
		transform: rotate(2deg);
		clip-path: polygon(1% 0, 100% 2%, 99% 100%, 0 96%);
	}

	.hero-shot img:first-child,
	.wide img {
		width: 100%;
		height: 100%;
		min-height: 16rem;
		object-fit: cover;
	}

	.hero-shot img:first-child {
		aspect-ratio: 3 / 4;
	}

	.wide img {
		aspect-ratio: 5 / 3;
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

	.stamp {
		position: absolute;
		left: 4%;
		bottom: 6%;
		margin: 0;
		font-family: var(--font-hand);
		font-size: clamp(2rem, 5vw, 3rem);
		color: var(--yellow);
		transform: rotate(-8deg);
		text-shadow: 2px 3px 0 rgba(0, 0, 0, 0.55);
	}

	.copy {
		padding: 1rem 1.05rem;
		background: var(--cream);
		border: 2px solid color-mix(in oklab, var(--ink) 45%, transparent);
		box-shadow: 7px 9px 0 color-mix(in oklab, var(--azure) 35%, transparent);
		transform: rotate(-1deg);
	}

	.hand {
		margin: 0 0 0.75rem;
		font-family: var(--font-hand);
		font-size: clamp(1.35rem, 3vw, 1.7rem);
		line-height: 1.2;
		color: var(--blood);
	}

	.copy p:last-child {
		margin: 0;
		opacity: 0.85;
	}

	.beats {
		width: min(100%, 74rem);
		margin: 2rem auto 0;
		padding: 0 clamp(0.75rem, 2vw, 1.5rem);
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		gap: 0.85rem;
	}

	.beats article {
		padding: 1rem;
		background: var(--ink);
		color: var(--cream);
		transform: rotate(var(--rot));
		clip-path: polygon(0 2%, 100% 0, 98% 100%, 1% 96%);
	}

	.year {
		margin: 0 0 0.35rem;
		font-family: var(--font-hand);
		font-size: 1.2rem;
		color: var(--yellow);
	}

	.beats h2 {
		margin: 0 0 0.45rem;
		font-family: var(--font-stamp);
		font-size: 1.35rem;
		text-transform: uppercase;
	}

	.beats p:last-child {
		margin: 0;
		opacity: 0.82;
		font-size: 0.95rem;
	}

	.cta-row {
		width: min(100%, 74rem);
		margin: 2rem auto 0;
		padding: 0 clamp(0.75rem, 2vw, 1.5rem);
		display: flex;
		flex-wrap: wrap;
		gap: 0.65rem;
	}

	.cta-row a {
		padding: 0.7rem 1.05rem;
		font-family: var(--font-stamp);
		font-size: 0.95rem;
		letter-spacing: 0.05em;
		text-transform: uppercase;
		background: var(--ink);
		color: var(--cream);
		box-shadow: 4px 5px 0 color-mix(in oklab, var(--pink) 50%, transparent);
		transform: rotate(-1deg);
	}

	.cta-row a:hover {
		background: var(--yellow);
		color: var(--ink);
	}

	.ghost {
		background: transparent !important;
		color: var(--ink) !important;
		border: 2px solid var(--ink);
		box-shadow: none !important;
	}

	@media (max-width: 860px) {
		.stage,
		.beats {
			grid-template-columns: 1fr;
		}

		.hero-shot {
			grid-row: auto;
			transform: none;
		}
	}
</style>
