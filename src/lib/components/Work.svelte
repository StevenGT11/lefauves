<script lang="ts">
	import { works } from '../data/works.js';
	import { reveal } from '../attach/reveal.js';
</script>

<section id="work" class="work" {@attach reveal(0.04)}>
	<header class="head">
		<p class="kicker">selected canvases</p>
		<h2>
			<span class="stamp">The paintings</span>
			<span class="stamp accent">are the site.</span>
		</h2>
		<a class="more" href="/collections">full collections →</a>
	</header>

	<div class="wall" aria-label="Studio canvas collage">
		{#each works as piece, i (piece.id)}
			<article
				class={['piece', piece.slot]}
				style:--i={i}
				style:--rot="{[-3.2, 2.4, -1.6, 3.1, -2.5, 1.8][i % 6]}deg"
			>
				<figure>
					<img src={piece.src} alt={piece.alt} loading="lazy" />
					<img class="drip" src="/art/drip-overlay.svg" alt="" aria-hidden="true" />
					<div class="graffiti">
						<p class="year">{piece.year}</p>
						<h3>{piece.title}</h3>
						<p class="note">{piece.note}</p>
					</div>
				</figure>
			</article>
		{/each}
		<p class="wall-tag" aria-hidden="true">@lefauves</p>
	</div>
</section>

<style>
	.work {
		position: relative;
		padding: clamp(2.5rem, 7vh, 4.5rem) 0 clamp(3rem, 8vh, 5.5rem);
		background:
			radial-gradient(ellipse at 10% 20%, color-mix(in oklab, var(--pink) 14%, transparent), transparent 42%),
			radial-gradient(ellipse at 90% 80%, color-mix(in oklab, var(--azure) 12%, transparent), transparent 40%),
			var(--canvas);
		overflow: clip;
	}

	.head {
		width: min(100%, 72rem);
		margin: 0 auto 0.5rem;
		padding: 0 clamp(0.9rem, 3vw, 2rem);
		position: relative;
		z-index: 2;
	}

	.kicker {
		margin: 0 0 0.35rem;
		font-family: var(--font-hand);
		font-size: clamp(1.3rem, 3vw, 1.7rem);
		color: var(--blood);
		transform: rotate(-2.5deg);
		transform-origin: left;
	}

	h2 {
		margin: 0;
		display: grid;
		gap: 0.1rem;
	}

	.stamp {
		display: block;
		max-width: 14ch;
		font-family: var(--font-stamp);
		font-size: clamp(2.4rem, 8vw, 5rem);
		line-height: 0.88;
		text-transform: uppercase;
		letter-spacing: 0.01em;
		text-shadow: 3px 4px 0 color-mix(in oklab, var(--ink) 18%, transparent);
	}

	.stamp.accent {
		color: var(--pink);
		transform: rotate(-1.5deg);
		text-shadow:
			3px 4px 0 var(--ink),
			-1px -1px 0 var(--yellow);
	}

	.more {
		display: inline-flex;
		margin-top: 0.85rem;
		font-family: var(--font-stamp);
		font-size: 0.9rem;
		letter-spacing: 0.05em;
		text-transform: uppercase;
		color: var(--azure);
		transform: rotate(-1deg);
	}

	.more:hover {
		color: var(--pink);
	}

	.wall {
		position: relative;
		width: min(100%, 78rem);
		margin: 1.5rem auto 0;
		min-height: clamp(52rem, 118vw, 68rem);
		padding: 0 clamp(0.4rem, 1.5vw, 1rem);
	}

	.piece {
		position: absolute;
		margin: 0;
		opacity: 0;
		transform: translateY(2.8rem) rotate(var(--rot));
		transition:
			opacity 0.85s var(--ease),
			transform 0.85s var(--ease);
		transition-delay: calc(var(--i) * 0.09s);
		z-index: calc(2 + var(--i));
	}

	.work:global(.visible) .piece {
		opacity: 1;
		transform: rotate(var(--rot));
	}

	.piece:hover,
	.piece:focus-within {
		z-index: 20;
		transform: rotate(0deg) scale(1.03);
	}

	figure {
		margin: 0;
		position: relative;
		background: var(--void);
		box-shadow:
			0 1px 0 color-mix(in oklab, var(--ink) 25%, transparent),
			14px 22px 48px rgba(0, 0, 0, 0.28);
		overflow: hidden;
		clip-path: polygon(0 1.2%, 100% 0, 98.8% 98.5%, 1.2% 100%);
	}

	figure img:first-child {
		width: 100%;
		height: 100%;
		object-fit: cover;
		object-position: center top;
		transition: transform 0.7s var(--ease);
	}

	.piece:hover figure img:first-child {
		transform: scale(1.06);
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
		animation: drip-pulse 7s ease-in-out infinite alternate;
	}

	.graffiti {
		position: absolute;
		inset: auto 0 0;
		padding: 2.5rem 0.75rem 0.7rem;
		background: linear-gradient(to top, rgba(12, 12, 12, 0.88) 0%, rgba(12, 12, 12, 0.2) 70%, transparent);
		color: var(--cream);
		pointer-events: none;
	}

	.year {
		margin: 0;
		font-family: var(--font-hand);
		font-size: 1.15rem;
		color: var(--yellow);
		transform: rotate(-2deg);
		transform-origin: left;
	}

	h3 {
		margin: 0;
		font-family: var(--font-stamp);
		font-size: clamp(1.35rem, 3.2vw, 2.1rem);
		text-transform: uppercase;
		letter-spacing: 0.02em;
		text-shadow: 2px 3px 0 rgba(0, 0, 0, 0.55);
	}

	.note {
		margin: 0.15rem 0 0;
		font-size: 0.88rem;
		opacity: 0.78;
		max-width: 28rem;
	}

	.hero {
		top: 2%;
		left: 2%;
		width: min(52%, 28rem);
	}
	.hero figure {
		aspect-ratio: 4 / 5;
	}
	.tall {
		top: 4%;
		right: 1%;
		width: min(42%, 22rem);
	}
	.tall figure {
		aspect-ratio: 3 / 4;
	}
	.wide {
		top: 48%;
		left: 18%;
		width: min(48%, 26rem);
	}
	.wide figure {
		aspect-ratio: 5 / 4;
	}
	.scrap:nth-of-type(4) {
		top: 42%;
		right: 4%;
		width: min(34%, 17rem);
	}
	.scrap:nth-of-type(5) {
		top: 72%;
		left: 3%;
		width: min(30%, 15rem);
	}
	.scrap:nth-of-type(6) {
		top: 76%;
		right: 18%;
		width: min(22%, 11rem);
	}
	.scrap figure {
		aspect-ratio: 1 / 1;
	}

	.wall-tag {
		position: absolute;
		bottom: 4%;
		left: 42%;
		margin: 0;
		font-family: var(--font-hand);
		font-size: clamp(2rem, 6vw, 3.5rem);
		color: var(--azure);
		opacity: 0;
		transform: rotate(8deg);
		pointer-events: none;
		transition: opacity 0.9s 0.55s var(--ease);
	}

	.work:global(.visible) .wall-tag {
		opacity: 0.55;
	}

	@keyframes drip-pulse {
		from {
			opacity: 0.14;
		}
		to {
			opacity: 0.28;
		}
	}

	@media (max-width: 760px) {
		.wall {
			display: grid;
			gap: 1.35rem;
			min-height: 0;
			padding: 0 clamp(0.65rem, 3vw, 1rem);
		}

		.piece,
		.hero,
		.tall,
		.wide,
		.scrap:nth-of-type(4),
		.scrap:nth-of-type(5),
		.scrap:nth-of-type(6) {
			position: relative;
			top: auto;
			left: auto;
			right: auto;
			width: 100%;
			margin: 0;
		}

		.piece:nth-child(even) {
			width: 92%;
			margin-left: auto;
		}

		.hero figure,
		.tall figure,
		.wide figure,
		.scrap figure {
			aspect-ratio: 4 / 5;
		}

		.wall-tag {
			position: relative;
			bottom: auto;
			left: auto;
			margin: 0.5rem 0 0;
			text-align: right;
			opacity: 0.45;
		}

		.work:global(.visible) .wall-tag {
			opacity: 0.45;
		}
	}
</style>
