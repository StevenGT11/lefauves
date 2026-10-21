<script lang="ts">
	import { contact } from '../data/site.js';
	import { collectionWall } from '../data/live.js';
	import { reveal } from '../attach/reveal.js';

	const strip = [
		...collectionWall.slice(0, 6),
		{ src: '/art/true-bros.png', alt: 'True Bros detail', id: 'art-bros' },
		{ src: '/art/marilyn-collage.png', alt: 'Marilyn collage', id: 'art-marilyn' }
	];
</script>

<section id="instagram" class="ig" {@attach reveal(0.08)}>
	<header class="head">
		<p class="kicker">from the feed</p>
		<h2>
			<a href={contact.instagramHref} rel="noopener noreferrer" target="_blank">{contact.instagram}</a>
		</h2>
		<p class="lede">Paintings, masks, wet floors — follow the drips.</p>
	</header>

	<div class="strip" aria-label="Studio and canvas stills">
		{#each strip as shot, i (shot.src)}
			<figure class="frame" style:--i={i} style:--rot="{[-3, 2.2, -1.5, 2.8, -2.1, 1.6, -2.6, 1.9][i % 8]}deg">
				<img src={shot.src} alt={shot.alt} loading="lazy" />
			</figure>
		{/each}
	</div>

	<a class="cta" href={contact.instagramHref} rel="noopener noreferrer" target="_blank">open Instagram</a>
</section>

<style>
	.ig {
		padding: clamp(2rem, 6vh, 3.5rem) 0 clamp(2.5rem, 6vh, 4rem);
		background: var(--void);
		color: var(--cream);
		overflow: clip;
	}

	.head {
		width: min(100%, 72rem);
		margin: 0 auto 1.25rem;
		padding: 0 clamp(0.9rem, 3vw, 2rem);
	}

	.kicker {
		margin: 0 0 0.3rem;
		font-family: var(--font-hand);
		font-size: 1.35rem;
		color: var(--pink);
		transform: rotate(-2deg);
		transform-origin: left;
	}

	h2 {
		margin: 0;
		font-family: var(--font-stamp);
		font-size: clamp(2.2rem, 7vw, 4rem);
		line-height: 0.9;
		text-transform: lowercase;
	}

	h2 a {
		color: var(--yellow);
		text-shadow: 3px 4px 0 rgba(0, 0, 0, 0.55);
	}

	h2 a:hover {
		color: var(--cream);
	}

	.lede {
		margin: 0.65rem 0 0;
		opacity: 0.75;
	}

	.strip {
		display: flex;
		gap: 0.75rem;
		padding: 0.5rem clamp(0.75rem, 2vw, 1.5rem) 0.25rem;
		overflow-x: auto;
		scroll-snap-type: x mandatory;
	}

	.frame {
		margin: 0;
		flex: 0 0 auto;
		width: min(42vw, 14rem);
		aspect-ratio: 1;
		overflow: hidden;
		scroll-snap-align: start;
		background: var(--charcoal);
		box-shadow: 8px 12px 28px rgba(0, 0, 0, 0.45);
		clip-path: polygon(0 1.5%, 100% 0, 98% 100%, 1% 97%);
		transform: rotate(var(--rot)) translateY(1rem);
		opacity: 0;
		transition:
			opacity 0.7s var(--ease),
			transform 0.7s var(--ease);
		transition-delay: calc(var(--i) * 0.06s);
	}

	.ig:global(.visible) .frame {
		opacity: 1;
		transform: rotate(var(--rot));
	}

	.frame:hover {
		transform: rotate(0deg) scale(1.04);
	}

	.frame img {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}

	.cta {
		display: inline-flex;
		margin: 1.35rem clamp(0.9rem, 3vw, 2rem) 0;
		padding: 0.7rem 1.05rem;
		font-family: var(--font-stamp);
		font-size: 0.95rem;
		letter-spacing: 0.05em;
		text-transform: uppercase;
		background: var(--pink);
		color: var(--cream);
		box-shadow: 4px 5px 0 rgba(0, 0, 0, 0.45);
		transform: rotate(1deg);
	}

	.cta:hover {
		background: var(--azure);
	}
</style>
