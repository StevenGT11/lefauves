<script lang="ts">
	import PageBanner from '#lib/components/PageBanner.svelte';
	import { collectPaths, contact } from '#lib/data/site.js';
	import { live } from '#lib/data/live.js';
</script>

<svelte:head>
	<title>One of One Commission · FAUVES</title>
	<meta
		name="description"
		content="Private art commission by John Paul Fauves — one-of-one originals for collectors and spaces."
	/>
</svelte:head>

<section class="commission">
	<PageBanner
		kicker="private commission"
		title="One of one."
		accent="Made for you."
		lede="Custom original artwork with scale, emotion, and presence — for collectors, homes, hotels, restaurants, studios."
	/>

	<div class="board">
		<figure class="shot">
			<img src={live.commissionHero.src} alt={live.commissionHero.alt} />
			<img class="mark" src={live.commissionMark.src} alt="" aria-hidden="true" />
			<img class="drip" src="/art/drip-overlay.svg" alt="" aria-hidden="true" />
		</figure>

		<div class="paths">
			{#each collectPaths as path, i (path.id)}
				<article style:--rot="{[-2, 1.5, -1.2, 2.1, -1.6, 1.1][i]}deg">
					<p>{path.tag}</p>
					<h2>{path.title}</h2>
					<span>{path.note}</span>
				</article>
			{/each}
		</div>
	</div>

	<a class="cta" href="/contact">start with {contact.instagram} →</a>
</section>

<style>
	.commission {
		padding-bottom: clamp(3rem, 8vh, 5rem);
		background:
			radial-gradient(ellipse at 10% 20%, color-mix(in oklab, var(--azure) 12%, transparent), transparent 40%),
			var(--canvas);
	}

	.board {
		width: min(100%, 74rem);
		margin: 0 auto;
		padding: 0 clamp(0.75rem, 2vw, 1.5rem);
		display: grid;
		grid-template-columns: 0.95fr 1.05fr;
		gap: 1rem;
		align-items: start;
	}

	.shot {
		margin: 0;
		position: relative;
		overflow: hidden;
		transform: rotate(-1.5deg);
		clip-path: polygon(0 1%, 100% 0, 98% 100%, 1% 97%);
		box-shadow: 14px 20px 44px rgba(0, 0, 0, 0.25);
		background: var(--void);
	}

	.shot > img:first-child {
		width: 100%;
		aspect-ratio: 3 / 4;
		object-fit: cover;
	}

	.mark {
		position: absolute;
		right: 4%;
		bottom: 8%;
		width: 32%;
		transform: rotate(8deg);
		opacity: 0.9;
		filter: drop-shadow(4px 6px 0 rgba(0, 0, 0, 0.35));
	}

	.drip {
		position: absolute;
		inset: 0;
		width: 100%;
		height: 100%;
		object-fit: cover;
		opacity: 0.2;
		mix-blend-mode: multiply;
		pointer-events: none;
	}

	.paths {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 0.75rem;
	}

	.paths article {
		padding: 0.9rem 0.85rem;
		background: var(--cream);
		border: 2px solid color-mix(in oklab, var(--ink) 40%, transparent);
		box-shadow: 5px 7px 0 color-mix(in oklab, var(--ink) 14%, transparent);
		transform: rotate(var(--rot));
		clip-path: polygon(0 2%, 100% 0, 98% 100%, 1% 96%);
	}

	.paths article:nth-child(2n) {
		background: var(--ink);
		color: var(--cream);
		border-color: transparent;
	}

	.paths article:nth-child(3n) {
		background: color-mix(in oklab, var(--pink) 88%, var(--cream));
		color: var(--cream);
		border-color: transparent;
	}

	.paths p {
		margin: 0 0 0.25rem;
		font-family: var(--font-hand);
		font-size: 1.1rem;
	}

	.paths h2 {
		margin: 0 0 0.35rem;
		font-family: var(--font-stamp);
		font-size: 1.15rem;
		text-transform: uppercase;
	}

	.paths span {
		font-size: 0.9rem;
		opacity: 0.85;
		line-height: 1.3;
	}

	.cta {
		display: inline-flex;
		margin: 1.75rem clamp(0.9rem, 3vw, 2rem) 0;
		padding: 0.75rem 1.1rem;
		font-family: var(--font-stamp);
		font-size: 0.95rem;
		letter-spacing: 0.04em;
		text-transform: uppercase;
		background: var(--ink);
		color: var(--cream);
		box-shadow: 4px 5px 0 color-mix(in oklab, var(--pink) 55%, transparent);
		transform: rotate(-1deg);
	}

	.cta:hover {
		background: var(--yellow);
		color: var(--ink);
	}

	@media (max-width: 860px) {
		.board {
			grid-template-columns: 1fr;
		}

		.paths {
			grid-template-columns: 1fr;
		}
	}
</style>
