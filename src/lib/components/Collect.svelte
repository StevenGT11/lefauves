<script lang="ts">
	import { collectPaths, contact } from '../data/site.js';
	import { live } from '../data/live.js';
	import { reveal } from '../attach/reveal.js';
</script>

<section id="collect" class="collect" {@attach reveal(0.08)}>
	<div class="inner">
		<header class="head">
			<p class="kicker">collector access</p>
			<h2>
				<span>Acquire.</span>
				<span class="accent">Commission.</span>
				<span>Place.</span>
			</h2>
			<p class="lede">
				Original contemporary work for private collectors, interiors, galleries, and spaces that
				demand presence.
			</p>
		</header>

		<div class="paths">
			{#each collectPaths as path, i (path.id)}
				<article class="path" style:--i={i} style:--rot="{[-2.2, 1.6, -1.1, 2.4, -1.8, 1.2][i]}deg">
					<p class="tag">{path.tag}</p>
					<h3>{path.title}</h3>
					<p>{path.note}</p>
				</article>
			{/each}
		</div>

		<div class="ctas">
			<a class="cta" href="/one-of-one-commission">one of one commission →</a>
			<a class="cta ghost" href="#contact">inquiry · {contact.instagram}</a>
		</div>
	</div>

	<figure class="side" aria-hidden="true">
		<img src={live.homeWorkB.src} alt="" />
		<img class="drip" src="/art/drip-overlay.svg" alt="" />
	</figure>
</section>

<style>
	.collect {
		position: relative;
		isolation: isolate;
		padding: clamp(2.5rem, 7vh, 4.5rem) clamp(0.75rem, 2.5vw, 1.5rem);
		background:
			radial-gradient(ellipse at 85% 10%, color-mix(in oklab, var(--pink) 16%, transparent), transparent 45%),
			var(--canvas);
		overflow: clip;
	}

	.inner {
		position: relative;
		z-index: 2;
		width: min(100%, 72rem);
		margin: 0 auto;
		opacity: 0;
		transform: translateY(1.5rem);
		transition:
			opacity 0.85s var(--ease),
			transform 0.85s var(--ease);
	}

	.collect:global(.visible) .inner {
		opacity: 1;
		transform: none;
	}

	.head {
		max-width: 36rem;
		margin-bottom: 1.75rem;
	}

	.kicker {
		margin: 0 0 0.35rem;
		font-family: var(--font-hand);
		font-size: 1.4rem;
		color: var(--azure);
		transform: rotate(-2deg);
		transform-origin: left;
	}

	h2 {
		margin: 0;
		font-family: var(--font-stamp);
		font-size: clamp(2.4rem, 7vw, 4.4rem);
		line-height: 0.9;
		text-transform: uppercase;
	}

	h2 span {
		display: block;
	}

	h2 .accent {
		color: var(--pink);
		transform: rotate(-1.4deg);
		text-shadow:
			3px 4px 0 var(--ink),
			-1px -1px 0 var(--yellow);
	}

	.lede {
		margin: 0.85rem 0 0;
		font-size: 1.05rem;
		opacity: 0.82;
		max-width: 32rem;
	}

	.paths {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		gap: 0.85rem;
	}

	.path {
		padding: 1rem 0.95rem 1.1rem;
		background: var(--cream);
		border: 2px solid color-mix(in oklab, var(--ink) 45%, transparent);
		box-shadow: 6px 8px 0 color-mix(in oklab, var(--ink) 18%, transparent);
		transform: rotate(var(--rot)) translateY(1rem);
		opacity: 0;
		transition:
			opacity 0.7s var(--ease),
			transform 0.7s var(--ease),
			background 0.2s ease;
		transition-delay: calc(0.12s + var(--i) * 0.07s);
		clip-path: polygon(0 1.5%, 100% 0, 98.5% 100%, 1% 97%);
	}

	.collect:global(.visible) .path {
		opacity: 1;
		transform: rotate(var(--rot));
	}

	.path:hover {
		background: var(--yellow);
		transform: rotate(0deg) translateY(-3px);
	}

	.path:nth-child(2n) {
		background: color-mix(in oklab, var(--ink) 92%, var(--cream));
		color: var(--cream);
		border-color: transparent;
	}

	.path:nth-child(2n):hover {
		background: var(--pink);
	}

	.path:nth-child(3n) {
		background: color-mix(in oklab, var(--azure) 88%, var(--cream));
		color: var(--cream);
		border-color: transparent;
	}

	.path:nth-child(3n):hover {
		background: var(--true-blue);
	}

	.tag {
		margin: 0 0 0.35rem;
		font-family: var(--font-hand);
		font-size: 1.15rem;
		opacity: 0.85;
	}

	h3 {
		margin: 0 0 0.4rem;
		font-family: var(--font-stamp);
		font-size: clamp(1.15rem, 2.4vw, 1.45rem);
		text-transform: uppercase;
		letter-spacing: 0.02em;
		line-height: 1;
	}

	.path p:last-child {
		margin: 0;
		font-size: 0.92rem;
		opacity: 0.85;
		line-height: 1.35;
	}

	.ctas {
		display: flex;
		flex-wrap: wrap;
		gap: 0.65rem;
		margin-top: 1.75rem;
	}

	.cta {
		display: inline-flex;
		padding: 0.75rem 1.1rem;
		font-family: var(--font-stamp);
		font-size: 0.95rem;
		letter-spacing: 0.04em;
		text-transform: uppercase;
		background: var(--ink);
		color: var(--cream);
		box-shadow: 4px 5px 0 color-mix(in oklab, var(--pink) 55%, transparent);
		transform: rotate(-1deg);
		transition:
			transform 0.2s var(--ease),
			background 0.2s ease;
	}

	.cta:hover {
		background: var(--pink);
		transform: rotate(0deg) translateY(-2px);
	}

	.ghost {
		background: transparent;
		color: var(--ink);
		border: 2px solid var(--ink);
		box-shadow: none;
	}

	.ghost:hover {
		background: var(--yellow);
		border-color: var(--yellow);
	}

	.side {
		margin: 0;
		position: absolute;
		top: 8%;
		right: -4%;
		width: min(34%, 18rem);
		aspect-ratio: 3 / 4;
		overflow: hidden;
		z-index: 1;
		transform: rotate(6deg);
		clip-path: polygon(2% 0, 100% 2%, 97% 100%, 0 96%);
		box-shadow: 14px 20px 40px rgba(0, 0, 0, 0.28);
		opacity: 0.55;
		pointer-events: none;
	}

	.side img:first-child {
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
		.paths {
			grid-template-columns: repeat(2, 1fr);
		}
		.side {
			display: none;
		}
	}

	@media (max-width: 560px) {
		.paths {
			grid-template-columns: 1fr;
		}
		.path {
			transform: none;
		}
		.collect:global(.visible) .path {
			transform: none;
		}
	}
</style>
