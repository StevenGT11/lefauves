<script lang="ts">
	import { contact, navLinks } from '../data/site.js';

	const year = new Date().getFullYear();
</script>

<footer class="footer" id="site-footer">
	<div class="wall">
		<img class="bg" src="/art/studio-01.jpeg" alt="" aria-hidden="true" />
		<img class="scrap" src="/art/studio-07.png" alt="" aria-hidden="true" />
		<img class="drips" src="/art/drip-overlay.svg" alt="" aria-hidden="true" />
		<div class="veil"></div>

		<div class="grid">
			<div class="brand">
				<p class="handle">{contact.instagram}</p>
				<strong class="name">JOHN PAUL FAUVES</strong>
				<p class="tag">
					Original contemporary artwork · San José studio · paint that still drips.
				</p>
				<p class="hand">paint loud · ship worldwide</p>
			</div>

			<nav class="col" aria-label="Footer">
				<p class="label">on this site</p>
				{#each navLinks as link (link.href)}
					<a href={link.href}>{link.label}</a>
				{/each}
				<a href="#process">Process</a>
				<a href="#instagram">Instagram strip</a>
			</nav>

			<div class="col">
				<p class="label">studio / contact</p>
				<a href="mailto:{contact.email}">{contact.email}</a>
				<a href={contact.whatsappHref} rel="noopener noreferrer" target="_blank">
					WhatsApp {contact.whatsapp}
				</a>
				<a href={contact.instagramHref} rel="noopener noreferrer" target="_blank">
					{contact.instagram}
				</a>
				<p class="meta">{contact.studio}</p>
				<p class="meta">{contact.shipping}</p>
			</div>

			<div class="col">
				<p class="label">collect</p>
				<a href="#collect">Available originals</a>
				<a href="#collect">Private commissions</a>
				<a href="#collect">Studio visits</a>
				<a href="#contact">Collector inquiry</a>
				<p class="meta">Private appointments only · no cold gallery quiet.</p>
			</div>
		</div>

		<div class="bar">
			<p>© {year} John Paul Fauves · Lefauves</p>
			<p class="credit">
				Site collage · real canvases ·
				<a href="https://github.com/StevenGT11/lefauves" rel="noopener noreferrer" target="_blank"
					>lefauves on GitHub</a
				>
			</p>
		</div>
	</div>
</footer>

<style>
	.footer {
		padding: 0;
		background: var(--void);
		color: var(--cream);
	}

	.wall {
		position: relative;
		isolation: isolate;
		overflow: hidden;
		padding: clamp(2.5rem, 6vh, 4rem) clamp(0.9rem, 3vw, 2rem) 1.5rem;
	}

	.bg {
		position: absolute;
		inset: 0;
		width: 100%;
		height: 100%;
		object-fit: cover;
		opacity: 0.28;
		filter: contrast(1.1) saturate(1.05);
		z-index: 0;
	}

	.scrap {
		position: absolute;
		right: 4%;
		bottom: 18%;
		width: min(18%, 9rem);
		aspect-ratio: 1;
		object-fit: cover;
		opacity: 0.35;
		transform: rotate(12deg);
		z-index: 1;
		pointer-events: none;
		mix-blend-mode: screen;
	}

	.drips {
		position: absolute;
		inset: 0;
		width: 100%;
		height: 100%;
		object-fit: cover;
		opacity: 0.18;
		mix-blend-mode: multiply;
		z-index: 1;
		pointer-events: none;
	}

	.veil {
		position: absolute;
		inset: 0;
		z-index: 2;
		background:
			linear-gradient(160deg, rgba(12, 12, 12, 0.88) 0%, rgba(12, 12, 12, 0.72) 55%, rgba(12, 12, 12, 0.9) 100%);
	}

	.grid {
		position: relative;
		z-index: 3;
		width: min(100%, 74rem);
		margin: 0 auto;
		display: grid;
		grid-template-columns: 1.4fr repeat(3, 1fr);
		gap: clamp(1.25rem, 3vw, 2rem);
	}

	.brand .handle {
		margin: 0 0 0.25rem;
		font-family: var(--font-hand);
		font-size: 1.4rem;
		color: var(--yellow);
		transform: rotate(-2deg);
		transform-origin: left;
	}

	.name {
		display: block;
		font-family: var(--font-stamp);
		font-size: clamp(1.8rem, 4vw, 2.6rem);
		line-height: 0.92;
		letter-spacing: 0.02em;
		font-weight: 400;
	}

	.tag {
		margin: 0.75rem 0 0;
		max-width: 22rem;
		font-size: 0.98rem;
		opacity: 0.82;
	}

	.hand {
		margin: 0.85rem 0 0;
		font-family: var(--font-hand);
		font-size: 1.45rem;
		color: var(--pink);
		transform: rotate(1.5deg);
		transform-origin: left;
	}

	.col {
		display: grid;
		gap: 0.45rem;
		align-content: start;
	}

	.label {
		margin: 0 0 0.25rem;
		font-family: var(--font-stamp);
		font-size: 0.8rem;
		letter-spacing: 0.1em;
		text-transform: uppercase;
		color: var(--yellow);
		opacity: 0.9;
	}

	.col a {
		font-family: var(--font-body);
		font-size: 0.98rem;
		opacity: 0.88;
		transition:
			color 0.15s ease,
			transform 0.15s var(--ease);
		width: fit-content;
	}

	.col a:hover {
		color: var(--yellow);
		transform: translateX(3px);
	}

	.meta {
		margin: 0.35rem 0 0;
		font-size: 0.88rem;
		opacity: 0.65;
		line-height: 1.35;
	}

	.bar {
		position: relative;
		z-index: 3;
		width: min(100%, 74rem);
		margin: 2.25rem auto 0;
		padding-top: 1.1rem;
		border-top: 2px dashed color-mix(in oklab, var(--cream) 28%, transparent);
		display: flex;
		flex-wrap: wrap;
		gap: 0.5rem 1.5rem;
		justify-content: space-between;
		font-family: var(--font-stamp);
		font-size: 0.78rem;
		letter-spacing: 0.06em;
		text-transform: uppercase;
		opacity: 0.7;
	}

	.credit {
		font-family: var(--font-hand);
		font-size: 1.1rem;
		letter-spacing: 0;
		text-transform: none;
		opacity: 1;
		color: color-mix(in oklab, var(--cream) 80%, transparent);
	}

	.credit a {
		color: var(--azure);
	}

	.credit a:hover {
		color: var(--yellow);
	}

	.bar p {
		margin: 0;
	}

	@media (max-width: 900px) {
		.grid {
			grid-template-columns: 1fr 1fr;
		}

		.brand {
			grid-column: 1 / -1;
		}

		.scrap {
			display: none;
		}
	}

	@media (max-width: 560px) {
		.grid {
			grid-template-columns: 1fr;
		}
	}
</style>
