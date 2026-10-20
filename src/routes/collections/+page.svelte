<script lang="ts">
	import PageBanner from '#lib/components/PageBanner.svelte';
	import { collectionWall } from '#lib/data/live.js';
</script>

<svelte:head>
	<title>Collections · FAUVES</title>
	<meta
		name="description"
		content="Available and recent works by John Paul Fauves — originals for collectors and spaces."
	/>
</svelte:head>

<section class="collections">
	<PageBanner
		kicker="available & recent"
		title="The paintings"
		accent="are the work."
		lede="Selected originals, sold pieces, collector favorites, and recent studio work — pulled from the live Fauves CDN."
	/>

	<div class="wall">
		{#each collectionWall as piece, i (piece.id)}
			<figure
				class="piece"
				style:--i={i}
				style:--rot="{[-2.8, 2.1, -1.4, 2.6, -2.0, 1.5, -1.8, 2.3, -1.1][i % 9]}deg"
			>
				<img src={piece.src} alt={piece.alt} loading="lazy" />
				<img class="drip" src="/art/drip-overlay.svg" alt="" aria-hidden="true" />
				<figcaption>
					<span>canvas {String(i + 1).padStart(2, '0')}</span>
					<strong>live site asset</strong>
				</figcaption>
			</figure>
		{/each}
	</div>

	<div class="placement">
		<div>
			<p class="label">the work</p>
			<ul>
				<li>Custom original artwork</li>
				<li>Large-format statement pieces</li>
			</ul>
		</div>
		<div>
			<p class="label">the placement</p>
			<ul>
				<li>Interior and hospitality spaces</li>
				<li>Private collector commissions</li>
				<li>Brand and event collaborations</li>
			</ul>
		</div>
		<a href="/one-of-one-commission">commission a one-of-one →</a>
	</div>
</section>

<style>
	.collections {
		padding-bottom: clamp(3rem, 8vh, 5rem);
		background: var(--canvas);
	}

	.wall {
		width: min(100%, 78rem);
		margin: 0 auto;
		padding: 0 clamp(0.6rem, 2vw, 1.25rem);
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		gap: 1rem;
	}

	.piece {
		margin: 0;
		position: relative;
		background: var(--void);
		overflow: hidden;
		transform: rotate(var(--rot));
		box-shadow: 10px 14px 32px rgba(0, 0, 0, 0.22);
		clip-path: polygon(0 1%, 100% 0, 98.5% 100%, 1% 98%);
		transition: transform 0.25s var(--ease);
	}

	.piece:nth-child(3n + 2) {
		margin-top: 1.5rem;
	}

	.piece:hover {
		transform: rotate(0deg) scale(1.02);
		z-index: 2;
	}

	.piece img:first-child {
		width: 100%;
		aspect-ratio: 4 / 5;
		object-fit: cover;
	}

	.drip {
		position: absolute;
		inset: 0;
		width: 100%;
		height: 100%;
		object-fit: cover;
		opacity: 0.18;
		mix-blend-mode: multiply;
		pointer-events: none;
	}

	figcaption {
		position: absolute;
		inset: auto 0 0;
		padding: 1.75rem 0.7rem 0.65rem;
		background: linear-gradient(to top, rgba(12, 12, 12, 0.88), transparent);
		color: var(--cream);
		display: grid;
		gap: 0.1rem;
	}

	figcaption span {
		font-family: var(--font-hand);
		font-size: 1.05rem;
		color: var(--yellow);
	}

	figcaption strong {
		font-family: var(--font-stamp);
		font-size: 1.05rem;
		letter-spacing: 0.04em;
		text-transform: uppercase;
		font-weight: 400;
	}

	.placement {
		width: min(100%, 72rem);
		margin: 2rem auto 0;
		padding: 1.1rem clamp(0.9rem, 3vw, 1.5rem);
		display: grid;
		grid-template-columns: 1fr 1fr auto;
		gap: 1rem;
		align-items: end;
		background: var(--ink);
		color: var(--cream);
		transform: rotate(-0.5deg);
		clip-path: polygon(0 0, 100% 2%, 99% 100%, 1% 96%);
	}

	.label {
		margin: 0 0 0.4rem;
		font-family: var(--font-hand);
		font-size: 1.25rem;
		color: var(--yellow);
	}

	ul {
		margin: 0;
		padding: 0;
		list-style: none;
		display: grid;
		gap: 0.3rem;
	}

	li {
		font-family: var(--font-stamp);
		font-size: 0.95rem;
		letter-spacing: 0.04em;
		text-transform: uppercase;
	}

	.placement a {
		padding: 0.7rem 1rem;
		font-family: var(--font-stamp);
		font-size: 0.9rem;
		letter-spacing: 0.04em;
		text-transform: uppercase;
		background: var(--yellow);
		color: var(--ink);
		justify-self: end;
	}

	.placement a:hover {
		background: var(--pink);
		color: var(--cream);
	}

	@media (max-width: 900px) {
		.wall {
			grid-template-columns: repeat(2, 1fr);
		}

		.piece:nth-child(3n + 2) {
			margin-top: 0;
		}

		.placement {
			grid-template-columns: 1fr;
		}

		.placement a {
			justify-self: start;
		}
	}
</style>
