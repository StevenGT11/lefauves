<script lang="ts">
	import { reveal } from '../attach/reveal.js';
</script>

<section id="contact" class="contact" {@attach reveal(0.15)}>
	<div class="board">
		<img class="bg" src="/art/studio-01.jpeg" alt="" aria-hidden="true" />
		<div class="veil"></div>
		<div class="content">
			<p class="kicker">hit the studio</p>
			<h2>Collect. Commission. Visit.</h2>
			<p class="lede">
				Worldwide inquiries · San José by appointment · shipping ready. The work travels; the
				drips stay on the canvas.
			</p>
			<div class="wires">
				<a href="mailto:studio@johnpaulfauves.com">
					<span>email</span>
					<strong>studio@johnpaulfauves.com</strong>
				</a>
				<a href="https://wa.me/14243882669" rel="noopener noreferrer" target="_blank">
					<span>whatsapp</span>
					<strong>+1 424-388-2669</strong>
				</a>
				<a href="https://www.instagram.com/lefauves" rel="noopener noreferrer" target="_blank">
					<span>instagram</span>
					<strong>@lefauves</strong>
				</a>
			</div>
		</div>
	</div>
</section>

<style>
	.contact {
		padding: 0 clamp(0.75rem, 2.5vw, 1.5rem) clamp(3rem, 8vh, 5rem);
		background: var(--canvas);
	}

	.board {
		position: relative;
		isolation: isolate;
		width: min(100%, 72rem);
		margin: 0 auto;
		overflow: hidden;
		min-height: clamp(28rem, 70vh, 40rem);
		display: grid;
		align-items: end;
		box-shadow: 0 24px 60px rgba(0, 0, 0, 0.28);
		clip-path: polygon(0 1%, 100% 0, 99% 100%, 1% 98%);
		opacity: 0;
		transform: translateY(1.5rem);
		transition:
			opacity 0.85s var(--ease),
			transform 0.85s var(--ease);
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
		filter: contrast(1.08) saturate(1.1);
		z-index: 0;
	}

	.veil {
		position: absolute;
		inset: 0;
		z-index: 1;
		background:
			linear-gradient(to top, rgba(12, 12, 12, 0.92) 0%, rgba(12, 12, 12, 0.35) 55%, rgba(12, 12, 12, 0.15) 100%);
	}

	.content {
		position: relative;
		z-index: 2;
		padding: clamp(1.5rem, 4vw, 2.75rem);
		color: var(--cream);
	}

	.kicker {
		margin: 0 0 0.45rem;
		font-family: var(--font-hand);
		font-size: 1.4rem;
		color: var(--yellow);
		transform: rotate(-2deg);
		transform-origin: left;
	}

	h2 {
		margin: 0;
		font-family: var(--font-stamp);
		font-size: clamp(2.2rem, 6vw, 4rem);
		line-height: 0.92;
		text-transform: uppercase;
		text-shadow: 3px 4px 0 rgba(0, 0, 0, 0.55);
	}

	.lede {
		max-width: 32rem;
		margin: 0.9rem 0 0;
		font-size: 1.05rem;
		opacity: 0.88;
	}

	.wires {
		display: grid;
		gap: 0.65rem;
		margin-top: 1.75rem;
	}

	.wires a {
		display: grid;
		gap: 0.15rem;
		padding: 0.85rem 0.95rem;
		background: color-mix(in oklab, var(--cream) 12%, transparent);
		border: 1px solid color-mix(in oklab, var(--cream) 35%, transparent);
		backdrop-filter: blur(2px);
		transition:
			background 0.2s ease,
			transform 0.2s var(--ease);
	}

	.wires a:hover {
		background: color-mix(in oklab, var(--pink) 55%, transparent);
		transform: translateX(4px);
	}

	.wires span {
		font-family: var(--font-hand);
		font-size: 1.1rem;
		opacity: 0.8;
	}

	.wires strong {
		font-family: var(--font-stamp);
		font-size: clamp(1.05rem, 2.5vw, 1.45rem);
		font-weight: 400;
		letter-spacing: 0.03em;
		word-break: break-word;
	}

	@media (min-width: 860px) {
		.wires {
			grid-template-columns: repeat(3, 1fr);
		}
	}
</style>
