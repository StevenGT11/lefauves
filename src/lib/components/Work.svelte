<script lang="ts">
	import { works } from '../data/works.js';
	import { reveal } from '../attach/reveal.js';
</script>

<section id="work" class="work" {@attach reveal(0.06)}>
	<header class="head">
		<p class="kicker">selected canvases</p>
		<h2>The paintings are the site.</h2>
		<p class="sub">Real studio photos — collage, drips, masks. No placeholders.</p>
	</header>

	<div class="stack">
		{#each works as piece, i (piece.id)}
			<article class="piece" class:offset={i % 2 === 1} style:--i={i}>
				<figure>
					<img src={piece.src} alt={piece.alt} loading="lazy" />
					<img class="drip" src="/art/drip-overlay.svg" alt="" aria-hidden="true" />
				</figure>
				<div class="meta">
					<p class="year">{piece.year}</p>
					<h3>{piece.title}</h3>
					<p class="note">{piece.note}</p>
				</div>
			</article>
		{/each}
	</div>
</section>

<style>
	.work {
		padding: clamp(2.5rem, 7vh, 4rem) 0 clamp(2rem, 5vh, 3rem);
		background: var(--canvas);
	}

	.head {
		width: min(100%, 72rem);
		margin: 0 auto 1.75rem;
		padding: 0 clamp(0.9rem, 3vw, 2rem);
	}

	.kicker {
		margin: 0 0 0.4rem;
		font-family: var(--font-hand);
		font-size: 1.35rem;
		color: var(--blood);
		transform: rotate(-2deg);
		transform-origin: left;
	}

	h2 {
		margin: 0;
		max-width: 12ch;
		font-family: var(--font-stamp);
		font-size: clamp(2.3rem, 7vw, 4.6rem);
		line-height: 0.92;
		text-transform: uppercase;
		letter-spacing: 0.01em;
	}

	.sub {
		margin: 0.75rem 0 0;
		max-width: 28rem;
		font-size: 1.05rem;
		opacity: 0.8;
	}

	.stack {
		display: grid;
		gap: clamp(2rem, 5vh, 3.5rem);
		padding: 0 clamp(0.6rem, 2vw, 1.5rem);
	}

	.piece {
		width: min(100%, 58rem);
		margin: 0 auto;
		opacity: 0;
		transform: translateY(2.5rem) rotate(-1deg);
		transition:
			opacity 0.8s var(--ease),
			transform 0.8s var(--ease);
		transition-delay: calc(var(--i) * 0.07s);
	}

	.piece.offset {
		margin-left: auto;
		margin-right: clamp(0rem, 4vw, 3rem);
		transform: translateY(2.5rem) rotate(1.4deg);
	}

	.work:global(.visible) .piece,
	.work:global(.visible) .piece.offset {
		opacity: 1;
		transform: rotate(var(--final-rot, -0.8deg));
	}

	.work:global(.visible) .piece.offset {
		--final-rot: 1deg;
	}

	figure {
		margin: 0;
		position: relative;
		background: var(--void);
		box-shadow:
			0 2px 0 color-mix(in oklab, var(--ink) 20%, transparent),
			12px 18px 40px rgba(0, 0, 0, 0.22);
		overflow: hidden;
		clip-path: polygon(0 1%, 100% 0, 99% 99%, 1% 100%);
	}

	figure img:first-child {
		width: 100%;
		aspect-ratio: 4 / 5;
		object-fit: cover;
		object-position: center top;
		transition: transform 0.7s var(--ease);
	}

	.piece:hover figure img:first-child {
		transform: scale(1.04);
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

	.meta {
		display: grid;
		gap: 0.15rem;
		padding: 0.85rem 0.35rem 0;
	}

	.year {
		margin: 0;
		font-family: var(--font-hand);
		font-size: 1.15rem;
		color: var(--azure);
	}

	h3 {
		margin: 0;
		font-family: var(--font-stamp);
		font-size: clamp(1.6rem, 4vw, 2.4rem);
		text-transform: uppercase;
		letter-spacing: 0.02em;
	}

	.note {
		margin: 0.15rem 0 0;
		font-size: 0.95rem;
		opacity: 0.72;
		max-width: 36rem;
	}

	@media (max-width: 700px) {
		.piece,
		.piece.offset {
			margin-left: 0;
			margin-right: 0;
		}
	}
</style>
