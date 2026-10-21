<script lang="ts">
	import { press } from '../data/site.js';
	import { reveal } from '../attach/reveal.js';
</script>

<section id="press" class="press" {@attach reveal(0.1)}>
	<header class="head">
		<p class="kicker">press / noise</p>
		<h2>
			<span>They wrote.</span>
			<span class="accent">We dripped.</span>
		</h2>
	</header>

	<div class="tape">
		{#each press as item, i (item.outlet)}
			<blockquote class="clip" style:--i={i} style:--rot="{[-2.5, 1.8, -1.2, 2.6, -1.9, 1.4][i]}deg">
				<p class="outlet">{item.outlet}</p>
				<p class="line">“{item.line}”</p>
			</blockquote>
		{/each}
	</div>

	<p class="more">
		<a href="/artist-story">read the artist story →</a>
	</p>
</section>

<style>
	.press {
		padding: clamp(2.5rem, 7vh, 4.5rem) clamp(0.75rem, 2.5vw, 1.5rem);
		background: linear-gradient(180deg, var(--canvas), color-mix(in oklab, var(--azure) 10%, var(--canvas)));
		overflow: clip;
	}

	.head {
		width: min(100%, 72rem);
		margin: 0 auto 1.5rem;
	}

	.kicker {
		margin: 0 0 0.35rem;
		font-family: var(--font-hand);
		font-size: 1.4rem;
		color: var(--blood);
		transform: rotate(-2deg);
		transform-origin: left;
	}

	h2 {
		margin: 0;
		font-family: var(--font-stamp);
		font-size: clamp(2.3rem, 6.5vw, 4rem);
		line-height: 0.9;
		text-transform: uppercase;
	}

	h2 span {
		display: block;
	}

	h2 .accent {
		color: var(--azure);
		transform: rotate(-1.2deg);
	}

	.tape {
		width: min(100%, 72rem);
		margin: 0 auto;
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		gap: 1rem;
	}

	.clip {
		margin: 0;
		padding: 1.1rem 1rem 1.2rem;
		background: var(--cream);
		border: 2px solid color-mix(in oklab, var(--ink) 40%, transparent);
		box-shadow: 7px 9px 0 color-mix(in oklab, var(--pink) 35%, transparent);
		transform: rotate(var(--rot)) translateY(1.2rem);
		opacity: 0;
		transition:
			opacity 0.7s var(--ease),
			transform 0.7s var(--ease);
		transition-delay: calc(var(--i) * 0.08s);
		clip-path: polygon(0 2%, 98% 0, 100% 97%, 2% 100%);
	}

	.press:global(.visible) .clip {
		opacity: 1;
		transform: rotate(var(--rot));
	}

	.clip:hover {
		transform: rotate(0deg) translateY(-4px);
		background: var(--yellow);
	}

	.outlet {
		margin: 0 0 0.55rem;
		font-family: var(--font-stamp);
		font-size: 0.95rem;
		letter-spacing: 0.06em;
		text-transform: uppercase;
		color: var(--pink);
	}

	.line {
		margin: 0;
		font-family: var(--font-hand);
		font-size: clamp(1.25rem, 2.4vw, 1.55rem);
		line-height: 1.2;
	}

	.more {
		width: min(100%, 72rem);
		margin: 1.35rem auto 0;
		font-family: var(--font-stamp);
		font-size: 0.9rem;
		letter-spacing: 0.05em;
		text-transform: uppercase;
	}

	.more a {
		color: var(--azure);
	}

	.more a:hover {
		color: var(--pink);
	}

	@media (max-width: 900px) {
		.tape {
			grid-template-columns: repeat(2, 1fr);
		}
	}

	@media (max-width: 560px) {
		.tape {
			grid-template-columns: 1fr;
		}
	}
</style>
