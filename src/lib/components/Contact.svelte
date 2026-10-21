<script lang="ts">
	import { contact } from '../data/site.js';
	import { live } from '../data/live.js';
	import { reveal } from '../attach/reveal.js';

	const wires = [
		{ label: 'email', value: contact.email, href: `mailto:${contact.email}`, rot: -2.4 },
		{ label: 'whatsapp', value: contact.whatsapp, href: contact.whatsappHref, rot: 1.8 },
		{ label: 'instagram', value: contact.instagram, href: contact.instagramHref, rot: -1.2 }
	] as const;
</script>

<section id="contact" class="contact" {@attach reveal(0.12)}>
	<div class="board">
		<img class="bg" src={live.landingPoster.src} alt="" aria-hidden="true" />
		<img class="layer" src="/art/true-bros.png" alt="" aria-hidden="true" />
		<img class="drips" src="/art/drip-overlay.svg" alt="" aria-hidden="true" />
		<div class="veil"></div>

		<div class="content">
			<p class="kicker">hit the studio</p>
			<h2>
				<span>Collect.</span>
				<span class="accent">Commission.</span>
				<span>Visit.</span>
			</h2>
			<p class="lede">
				Worldwide inquiries · San José by appointment · shipping ready. The work travels; the drips
				stay on the canvas.
			</p>

			<div class="scraps">
				{#each wires as wire, i (wire.href)}
					<a
						class="scrap"
						href={wire.href}
						rel={wire.href.startsWith('http') ? 'noopener noreferrer' : undefined}
						target={wire.href.startsWith('http') ? '_blank' : undefined}
						style:--i={i}
						style:--rot="{wire.rot}deg"
					>
						<span>{wire.label}</span>
						<strong>{wire.value}</strong>
					</a>
				{/each}
			</div>

			<a class="page-link" href="/contact">open contact page →</a>
		</div>

		<p class="wall-note" aria-hidden="true">WRITE ME</p>
	</div>
</section>

<style>
	.contact {
		padding: 0 clamp(0.5rem, 2vw, 1.25rem) clamp(3rem, 8vh, 5rem);
		background: linear-gradient(180deg, var(--void) 0%, var(--canvas) 38%);
	}

	.board {
		position: relative;
		isolation: isolate;
		width: min(100%, 74rem);
		margin: 0 auto;
		overflow: hidden;
		min-height: clamp(32rem, 78vh, 44rem);
		display: grid;
		align-items: end;
		box-shadow: 0 28px 70px rgba(0, 0, 0, 0.35);
		clip-path: polygon(0 1.5%, 100% 0, 99% 100%, 1% 97.5%);
		opacity: 0;
		transform: translateY(1.75rem);
		transition:
			opacity 0.9s var(--ease),
			transform 0.9s var(--ease);
	}

	.contact:global(.visible) .board {
		opacity: 1;
		transform: none;
	}

	.bg {
		position: absolute;
		inset: 0;
		width: 100%;
		height: 100%;
		object-fit: cover;
		filter: contrast(1.08) saturate(1.12);
		z-index: 0;
	}

	.layer {
		position: absolute;
		inset: 8% -8% -6% 42%;
		object-fit: cover;
		opacity: 0.55;
		mix-blend-mode: soft-light;
		clip-path: polygon(4% 0, 100% 3%, 96% 100%, 0 97%);
		transform: rotate(3deg);
		z-index: 1;
		pointer-events: none;
	}

	.drips {
		position: absolute;
		inset: 0;
		width: 100%;
		height: 100%;
		object-fit: cover;
		opacity: 0.26;
		mix-blend-mode: multiply;
		z-index: 2;
		pointer-events: none;
	}

	.veil {
		position: absolute;
		inset: 0;
		z-index: 3;
		background:
			linear-gradient(to top, rgba(12, 12, 12, 0.9) 0%, rgba(12, 12, 12, 0.35) 48%, rgba(12, 12, 12, 0.12) 100%),
			linear-gradient(105deg, rgba(12, 12, 12, 0.45) 0%, transparent 50%);
	}

	.content {
		position: relative;
		z-index: 4;
		padding: clamp(1.5rem, 4vw, 2.75rem);
		color: var(--cream);
	}

	.kicker {
		margin: 0 0 0.4rem;
		font-family: var(--font-hand);
		font-size: 1.45rem;
		color: var(--yellow);
		transform: rotate(-2.5deg);
		transform-origin: left;
	}

	h2 {
		margin: 0;
		font-family: var(--font-stamp);
		font-size: clamp(2.3rem, 7vw, 4.4rem);
		line-height: 0.9;
		text-transform: uppercase;
		text-shadow: 3px 4px 0 rgba(0, 0, 0, 0.55);
	}

	h2 span {
		display: block;
	}

	h2 .accent {
		color: var(--pink);
		transform: rotate(-1.5deg);
	}

	.lede {
		max-width: 30rem;
		margin: 0.85rem 0 0;
		font-size: 1.05rem;
		opacity: 0.88;
	}

	.scraps {
		display: grid;
		gap: 0.85rem;
		margin-top: 1.75rem;
	}

	.scrap {
		display: grid;
		gap: 0.2rem;
		width: fit-content;
		max-width: 100%;
		padding: 0.85rem 1rem 0.95rem;
		background: var(--cream);
		color: var(--ink);
		box-shadow: 5px 7px 0 rgba(0, 0, 0, 0.45);
		clip-path: polygon(0 2%, 98% 0, 100% 96%, 2% 100%);
		transform: rotate(var(--rot)) translateY(1.2rem);
		opacity: 0;
		transition:
			opacity 0.7s var(--ease),
			transform 0.7s var(--ease),
			background 0.2s ease;
		transition-delay: calc(0.2s + var(--i) * 0.1s);
	}

	.contact:global(.visible) .scrap {
		opacity: 1;
		transform: rotate(var(--rot));
	}

	.scrap:hover {
		background: var(--yellow);
		transform: rotate(0deg) translateY(-3px) scale(1.02);
	}

	.scrap:nth-child(2) {
		background: color-mix(in oklab, var(--pink) 88%, var(--cream));
		color: var(--cream);
	}

	.scrap:nth-child(3) {
		background: color-mix(in oklab, var(--azure) 85%, var(--cream));
		color: var(--cream);
	}

	.scrap span {
		font-family: var(--font-hand);
		font-size: 1.15rem;
	}

	.scrap strong {
		font-family: var(--font-stamp);
		font-size: clamp(1.05rem, 2.6vw, 1.5rem);
		font-weight: 400;
		letter-spacing: 0.03em;
		word-break: break-word;
	}

	.page-link {
		display: inline-flex;
		margin-top: 1.25rem;
		font-family: var(--font-stamp);
		letter-spacing: 0.05em;
		text-transform: uppercase;
		font-size: 0.9rem;
		color: var(--yellow);
	}

	.page-link:hover {
		color: var(--pink);
	}

	.wall-note {
		position: absolute;
		z-index: 4;
		top: 8%;
		right: 6%;
		margin: 0;
		font-family: var(--font-hand);
		font-size: clamp(2.4rem, 8vw, 4.5rem);
		color: var(--yellow);
		opacity: 0;
		transform: rotate(12deg) scale(1.05);
		text-shadow: 2px 3px 0 rgba(0, 0, 0, 0.55);
		pointer-events: none;
		transition:
			opacity 0.85s 0.35s var(--ease),
			transform 0.85s 0.35s var(--ease);
	}

	.contact:global(.visible) .wall-note {
		opacity: 0.72;
		transform: rotate(12deg);
	}

	@media (min-width: 860px) {
		.scraps {
			grid-template-columns: repeat(3, max-content);
			gap: 1rem;
		}
	}
</style>
