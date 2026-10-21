<script lang="ts">
	import { live } from '../data/live.js';
	import { reveal } from '../attach/reveal.js';
</script>

<section id="events" class="events" {@attach reveal(0.1)}>
	<header class="head">
		<p class="kicker">private shows & live rooms</p>
		<h2>
			<span>Get in</span>
			<span class="accent">the room.</span>
		</h2>
		<p class="lede">Exhibitions, live painting, private viewings, collector-only drops.</p>
	</header>

	<a class="show" href="/21-grams-cdmx">
		<img src={live.gramsPoster.src} alt={live.gramsPoster.alt} />
		<div class="meta">
			<p class="tag">featured</p>
			<strong>21 Grams · CDMX</strong>
			<span>Upcoming solo show — memoria, inocencia, máscaras.</span>
			<em>open the poster →</em>
		</div>
	</a>

	<p class="cta-row">
		<a href="/upcoming-events">all events</a>
		<a class="ghost" href="#contact">request an invite</a>
	</p>
</section>

<style>
	.events {
		padding: clamp(2.25rem, 6vh, 3.75rem) clamp(0.75rem, 2.5vw, 1.5rem) clamp(2.5rem, 6vh, 4rem);
		background: var(--canvas);
		opacity: 0;
		transform: translateY(1.25rem);
		transition:
			opacity 0.85s var(--ease),
			transform 0.85s var(--ease);
	}

	.events:global(.visible) {
		opacity: 1;
		transform: none;
	}

	.head {
		width: min(100%, 72rem);
		margin: 0 auto 1.25rem;
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
		font-size: clamp(2.2rem, 6.5vw, 3.8rem);
		line-height: 0.9;
		text-transform: uppercase;
	}

	h2 span {
		display: block;
	}

	.accent {
		color: var(--pink);
		transform: rotate(-1.3deg);
	}

	.lede {
		margin: 0.7rem 0 0;
		max-width: 32rem;
		opacity: 0.8;
	}

	.show {
		display: grid;
		grid-template-columns: 0.9fr 1.1fr;
		gap: 1rem;
		width: min(100%, 72rem);
		margin: 0 auto;
		align-items: center;
		color: inherit;
	}

	.show img {
		width: 100%;
		aspect-ratio: 4 / 5;
		object-fit: cover;
		transform: rotate(-2deg);
		clip-path: polygon(0 1%, 100% 0, 98% 100%, 1% 97%);
		box-shadow: 14px 20px 44px rgba(0, 0, 0, 0.25);
	}

	.meta {
		padding: 1.15rem 1.05rem;
		background: var(--ink);
		color: var(--cream);
		transform: rotate(1.2deg);
		clip-path: polygon(0 2%, 100% 0, 98% 100%, 1% 96%);
		display: grid;
		gap: 0.35rem;
	}

	.tag {
		margin: 0;
		font-family: var(--font-hand);
		font-size: 1.25rem;
		color: var(--yellow);
	}

	.meta strong {
		font-family: var(--font-stamp);
		font-size: clamp(1.8rem, 4vw, 2.6rem);
		text-transform: uppercase;
		color: var(--pink);
		font-weight: 400;
		line-height: 0.95;
	}

	.meta span {
		opacity: 0.85;
	}

	.meta em {
		font-style: normal;
		font-family: var(--font-stamp);
		letter-spacing: 0.05em;
		text-transform: uppercase;
		font-size: 0.9rem;
		color: var(--yellow);
		margin-top: 0.4rem;
	}

	.cta-row {
		width: min(100%, 72rem);
		margin: 1.5rem auto 0;
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
		border: 2px solid var(--ink);
	}

	.ghost:hover {
		background: var(--ink) !important;
		color: var(--cream) !important;
	}

	@media (max-width: 800px) {
		.show {
			grid-template-columns: 1fr;
		}
	}
</style>
