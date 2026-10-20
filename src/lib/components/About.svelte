<script lang="ts">
	import { reveal } from '../attach/reveal.js';
</script>

<section id="about" class="about" {@attach reveal(0.1)}>
	<div class="stage">
		<figure class="main">
			<img
				src="/art/studio-03.jpg"
				alt="John Paul Fauves in studio wearing a painted Mickey mask while working"
			/>
			<img class="drip" src="/art/drip-overlay.svg" alt="" aria-hidden="true" />
		</figure>

		<figure class="scrap a">
			<img src="/art/studio-06.png" alt="Close detail of a Fauves painting in the studio" />
		</figure>
		<figure class="scrap b">
			<img src="/art/studio-02.png" alt="Painted Mickey mask and wet paint on the studio floor" />
		</figure>

		<div class="graffiti">
			<p class="kicker">studio · san josé</p>
			<h2>
				<span>Mask on.</span>
				<span class="accent">Ego off.</span>
			</h2>
			<p class="lede">
				Neo-expressionist / neo-pop collisions — Mickey, Marilyn, masks, scribbles, drips — until
				familiar icons go feral.
			</p>
			<p class="hand">“THIS IS A DREAM” — on the forearm, in the work, in the room.</p>
			<ul>
				<li>one-of-one canvases</li>
				<li>large-format statements</li>
				<li>hand-painted masks / live rooms</li>
				<li>private studio visits</li>
			</ul>
		</div>
	</div>
</section>

<style>
	.about {
		padding: clamp(1.5rem, 4vh, 2.5rem) clamp(0.5rem, 2vw, 1.25rem) clamp(3.5rem, 9vh, 6rem);
		background: var(--void);
		color: var(--cream);
		overflow: clip;
	}

	.stage {
		position: relative;
		isolation: isolate;
		width: min(100%, 74rem);
		margin: 0 auto;
		min-height: clamp(34rem, 78vh, 46rem);
		opacity: 0;
		transform: translateY(1.75rem);
		transition:
			opacity 0.9s var(--ease),
			transform 0.9s var(--ease);
	}

	.about:global(.visible) .stage {
		opacity: 1;
		transform: none;
	}

	.main {
		margin: 0;
		position: absolute;
		inset: 0 8% 8% 0;
		overflow: hidden;
		clip-path: polygon(0 0, 100% 1.5%, 98.5% 100%, 1% 98%);
		box-shadow: 0 28px 70px rgba(0, 0, 0, 0.55);
		transform: rotate(-1.1deg);
		animation: about-drift 24s ease-in-out alternate both;
		z-index: 1;
	}

	.main img:first-child {
		width: 100%;
		height: 100%;
		object-fit: cover;
		object-position: center 18%;
		filter: contrast(1.06) saturate(1.05);
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

	.scrap {
		margin: 0;
		position: absolute;
		z-index: 3;
		overflow: hidden;
		background: var(--void);
		border: 3px solid color-mix(in oklab, var(--cream) 40%, transparent);
		box-shadow: 10px 16px 36px rgba(0, 0, 0, 0.45);
		opacity: 0;
		transition:
			opacity 0.8s var(--ease),
			transform 0.8s var(--ease);
	}

	.scrap img {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}

	.scrap.a {
		top: 6%;
		right: 0;
		width: min(28%, 13rem);
		aspect-ratio: 3 / 4;
		transform: rotate(7deg) translateY(1.5rem);
		transition-delay: 0.25s;
	}

	.scrap.b {
		bottom: 18%;
		left: auto;
		right: 22%;
		width: min(26%, 12.5rem);
		aspect-ratio: 1 / 1;
		transform: rotate(-8deg) translateY(1.5rem);
		transition-delay: 0.4s;
		border-color: color-mix(in oklab, var(--yellow) 55%, transparent);
		z-index: 5;
	}

	.about:global(.visible) .scrap {
		opacity: 1;
		transform: rotate(var(--scrap-rot, 7deg));
	}

	.about:global(.visible) .scrap.b {
		--scrap-rot: -8deg;
	}

	.graffiti {
		position: absolute;
		z-index: 4;
		left: clamp(0.75rem, 3vw, 2rem);
		bottom: clamp(1rem, 4vh, 2.5rem);
		right: clamp(18%, 22vw, 28%);
		max-width: 28rem;
		padding: 1.1rem 1rem 1.15rem;
		background:
			linear-gradient(135deg, rgba(12, 12, 12, 0.72), rgba(12, 12, 12, 0.35));
		clip-path: polygon(0 2%, 100% 0, 98% 100%, 1% 97%);
		transform: rotate(-1.2deg);
	}

	.kicker {
		margin: 0 0 0.35rem;
		font-family: var(--font-hand);
		font-size: 1.35rem;
		color: var(--pink);
		transform: rotate(-2deg);
		transform-origin: left;
	}

	h2 {
		margin: 0 0 0.7rem;
		font-family: var(--font-stamp);
		font-size: clamp(2.2rem, 5.5vw, 3.6rem);
		line-height: 0.9;
		text-transform: uppercase;
		text-shadow: 3px 4px 0 rgba(0, 0, 0, 0.55);
	}

	h2 span {
		display: block;
	}

	h2 .accent {
		color: var(--yellow);
		transform: rotate(-1deg);
		text-shadow:
			3px 4px 0 var(--ink),
			-1px -1px 0 var(--pink);
	}

	.lede {
		margin: 0 0 0.65rem;
		font-size: 1.02rem;
		opacity: 0.9;
	}

	.hand {
		margin: 0 0 0.85rem;
		font-family: var(--font-hand);
		font-size: clamp(1.35rem, 3vw, 1.7rem);
		line-height: 1.15;
		color: var(--yellow);
	}

	ul {
		margin: 0;
		padding: 0;
		list-style: none;
		display: grid;
		gap: 0.25rem;
	}

	li {
		font-family: var(--font-stamp);
		font-size: 0.88rem;
		letter-spacing: 0.05em;
		text-transform: uppercase;
		padding: 0.35rem 0;
		border-top: 1px dashed color-mix(in oklab, var(--cream) 28%, transparent);
		opacity: 0.88;
	}

	@keyframes about-drift {
		from {
			transform: rotate(-1.1deg) scale(1);
		}
		to {
			transform: rotate(-0.4deg) scale(1.03);
		}
	}

	@media (max-width: 760px) {
		.stage {
			min-height: 0;
			display: grid;
			gap: 0;
		}

		.main {
			position: relative;
			inset: auto;
			min-height: 22rem;
			transform: none;
			animation: none;
		}

		.scrap.a,
		.scrap.b {
			display: none;
		}

		.graffiti {
			position: relative;
			left: auto;
			right: auto;
			bottom: auto;
			max-width: none;
			margin-top: -2.5rem;
			transform: rotate(-0.5deg);
			z-index: 5;
		}
	}
</style>
