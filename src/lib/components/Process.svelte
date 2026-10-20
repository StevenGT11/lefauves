<script lang="ts">
	import { reveal } from '../attach/reveal.js';

	const steps = [
		{
			src: '/art/studio-02.png',
			label: '01 · wet floor',
			note: 'Mask drying · paint still moving'
		},
		{
			src: '/art/studio-06.png',
			label: '02 · cut & layer',
			note: 'Icons torn until they stop behaving'
		},
		{
			src: '/art/studio-05.jpeg',
			label: '03 · stamp it',
			note: 'Graffiti, brands, handwritten noise'
		},
		{
			src: '/art/studio-04.jpeg',
			label: '04 · leave the drip',
			note: 'Finish before the ego cleans up'
		}
	] as const;
</script>

<section id="process" class="process" {@attach reveal(0.1)}>
	<header class="head">
		<p class="kicker">how the canvas gets ugly</p>
		<h2>
			<span>Process,</span>
			<span class="accent">not polish.</span>
		</h2>
		<p class="lede">
			A short studio strip — floor, cut, stamp, drip. Different job from the manifesto above.
		</p>
	</header>

	<div class="strip">
		{#each steps as step, i (step.label)}
			<figure class="step" style:--i={i} style:--rot="{[-2.4, 1.8, -1.5, 2.2][i]}deg">
				<img src={step.src} alt={step.note} loading="lazy" />
				<figcaption>
					<p class="label">{step.label}</p>
					<p class="note">{step.note}</p>
				</figcaption>
			</figure>
		{/each}
	</div>

	<aside class="ticker">
		<p class="hand">next up · 21 Grams · CDMX</p>
		<p class="meta">
			Private shows & live paint by invite —
			<a href="#contact">ask for the room</a>
		</p>
	</aside>
</section>

<style>
	.process {
		padding: clamp(2.25rem, 6vh, 3.75rem) 0 clamp(2.5rem, 6vh, 4rem);
		background:
			radial-gradient(ellipse at 70% 0%, color-mix(in oklab, var(--yellow) 14%, transparent), transparent 42%),
			var(--canvas);
		overflow: clip;
	}

	.head {
		width: min(100%, 72rem);
		margin: 0 auto 1.25rem;
		padding: 0 clamp(0.9rem, 3vw, 2rem);
		opacity: 0;
		transform: translateY(1rem);
		transition:
			opacity 0.75s var(--ease),
			transform 0.75s var(--ease);
	}

	.process:global(.visible) .head {
		opacity: 1;
		transform: none;
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
		display: inline;
	}

	h2 .accent {
		color: var(--pink);
		display: inline-block;
		transform: rotate(-1.2deg);
		text-shadow: 2px 3px 0 color-mix(in oklab, var(--ink) 18%, transparent);
	}

	.lede {
		margin: 0.7rem 0 0;
		max-width: 34rem;
		font-size: 1.02rem;
		opacity: 0.78;
	}

	.strip {
		display: grid;
		grid-template-columns: repeat(4, 1fr);
		gap: 0.75rem;
		width: min(100%, 74rem);
		margin: 0 auto;
		padding: 0 clamp(0.75rem, 2vw, 1.5rem);
	}

	.step {
		margin: 0;
		background: var(--void);
		box-shadow: 8px 12px 0 color-mix(in oklab, var(--ink) 16%, transparent);
		clip-path: polygon(0 1.5%, 100% 0, 98.5% 100%, 1% 97%);
		overflow: hidden;
		transform: rotate(var(--rot)) translateY(1.2rem);
		opacity: 0;
		transition:
			opacity 0.7s var(--ease),
			transform 0.7s var(--ease);
		transition-delay: calc(0.1s + var(--i) * 0.08s);
	}

	.process:global(.visible) .step {
		opacity: 1;
		transform: rotate(var(--rot));
	}

	.step:hover {
		transform: rotate(0deg) translateY(-4px);
		z-index: 2;
	}

	.step img {
		width: 100%;
		aspect-ratio: 4 / 5;
		object-fit: cover;
		filter: contrast(1.05) saturate(1.05);
	}

	figcaption {
		padding: 0.7rem 0.75rem 0.85rem;
		background: var(--cream);
		color: var(--ink);
	}

	.label {
		margin: 0;
		font-family: var(--font-stamp);
		font-size: 0.95rem;
		letter-spacing: 0.04em;
		text-transform: uppercase;
	}

	.note {
		margin: 0.25rem 0 0;
		font-family: var(--font-hand);
		font-size: 1.15rem;
		line-height: 1.15;
		color: var(--azure);
	}

	.ticker {
		width: min(100%, 72rem);
		margin: 1.5rem auto 0;
		padding: 0.85rem 1rem;
		display: flex;
		flex-wrap: wrap;
		gap: 0.5rem 1.5rem;
		align-items: baseline;
		justify-content: space-between;
		background: var(--ink);
		color: var(--cream);
		transform: rotate(-0.6deg);
		clip-path: polygon(0 0, 100% 2%, 99% 100%, 1% 96%);
	}

	.hand {
		margin: 0;
		font-family: var(--font-hand);
		font-size: clamp(1.35rem, 3vw, 1.75rem);
		color: var(--yellow);
	}

	.meta {
		margin: 0;
		font-size: 0.95rem;
		opacity: 0.85;
	}

	.meta a {
		color: var(--pink);
		text-decoration: underline;
		text-underline-offset: 3px;
	}

	.meta a:hover {
		color: var(--yellow);
	}

	@media (max-width: 900px) {
		.strip {
			grid-template-columns: repeat(2, 1fr);
		}
	}

	@media (max-width: 520px) {
		.strip {
			grid-template-columns: 1fr 1fr;
			gap: 0.55rem;
		}

		.step img {
			aspect-ratio: 1;
		}

		h2 span,
		h2 .accent {
			display: block;
		}
	}
</style>
