<script lang="ts">
	import { experiences } from '../data/site.js';
	import { reveal } from '../attach/reveal.js';
</script>

<section id="experiences" class="exp" {@attach reveal(0.1)}>
	<div class="board">
		<img class="bg" src="/art/studio-03.jpg" alt="" aria-hidden="true" />
		<img class="overlay-art" src="/art/studio-02.png" alt="" aria-hidden="true" />
		<img class="drips" src="/art/drip-overlay.svg" alt="" aria-hidden="true" />
		<div class="veil"></div>

		<div class="copy">
			<p class="kicker">private shows & live rooms</p>
			<h2>
				<span>Get in</span>
				<span class="accent">the room.</span>
			</h2>
			<p class="lede">
				Exhibitions, live painting, private viewings, collection releases, collector-only drops —
				invitations that smell like turpentine.
			</p>

			<ul>
				{#each experiences as item, i (item.id)}
					<li style:--i={i}>
						<strong>{item.title}</strong>
						<span>{item.note}</span>
					</li>
				{/each}
			</ul>

			<a class="cta" href="#contact">request an invite</a>
		</div>
	</div>
</section>

<style>
	.exp {
		padding: clamp(1.5rem, 4vh, 2.5rem) clamp(0.5rem, 2vw, 1.25rem) clamp(2.5rem, 6vh, 4rem);
		background: var(--void);
	}

	.board {
		position: relative;
		isolation: isolate;
		width: min(100%, 74rem);
		margin: 0 auto;
		min-height: clamp(30rem, 72vh, 40rem);
		overflow: hidden;
		clip-path: polygon(0 1%, 100% 0, 99% 100%, 1% 98%);
		box-shadow: 0 28px 70px rgba(0, 0, 0, 0.4);
		opacity: 0;
		transform: translateY(1.5rem);
		transition:
			opacity 0.9s var(--ease),
			transform 0.9s var(--ease);
	}

	.exp:global(.visible) .board {
		opacity: 1;
		transform: none;
	}

	.bg {
		position: absolute;
		inset: 0;
		width: 100%;
		height: 100%;
		object-fit: cover;
		object-position: center 20%;
		filter: contrast(1.06) saturate(1.05);
		animation: drift 26s ease-in-out alternate both;
		z-index: 0;
	}

	.overlay-art {
		position: absolute;
		inset: auto -5% -8% 55%;
		width: 55%;
		aspect-ratio: 1;
		object-fit: cover;
		opacity: 0.45;
		mix-blend-mode: soft-light;
		transform: rotate(-7deg);
		clip-path: polygon(3% 0, 100% 4%, 96% 100%, 0 95%);
		z-index: 1;
		pointer-events: none;
	}

	.drips {
		position: absolute;
		inset: 0;
		width: 100%;
		height: 100%;
		object-fit: cover;
		opacity: 0.24;
		mix-blend-mode: multiply;
		z-index: 2;
		pointer-events: none;
	}

	.veil {
		position: absolute;
		inset: 0;
		z-index: 3;
		background:
			linear-gradient(105deg, rgba(12, 12, 12, 0.82) 0%, rgba(12, 12, 12, 0.35) 48%, rgba(12, 12, 12, 0.2) 100%);
	}

	.copy {
		position: relative;
		z-index: 4;
		max-width: 34rem;
		padding: clamp(1.5rem, 4vw, 2.75rem);
		color: var(--cream);
	}

	.kicker {
		margin: 0 0 0.4rem;
		font-family: var(--font-hand);
		font-size: 1.4rem;
		color: var(--yellow);
		transform: rotate(-2deg);
		transform-origin: left;
	}

	h2 {
		margin: 0;
		font-family: var(--font-stamp);
		font-size: clamp(2.4rem, 7vw, 4.2rem);
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
		margin: 0.85rem 0 0;
		font-size: 1.05rem;
		opacity: 0.88;
	}

	ul {
		margin: 1.4rem 0 0;
		padding: 0;
		list-style: none;
		display: grid;
		gap: 0.55rem;
	}

	li {
		display: grid;
		gap: 0.15rem;
		padding: 0.65rem 0.75rem;
		background: color-mix(in oklab, var(--cream) 10%, transparent);
		border-left: 3px solid var(--yellow);
		transform: translateX(-0.75rem);
		opacity: 0;
		transition:
			opacity 0.65s var(--ease),
			transform 0.65s var(--ease);
		transition-delay: calc(0.2s + var(--i) * 0.08s);
	}

	.exp:global(.visible) li {
		opacity: 1;
		transform: none;
	}

	li strong {
		font-family: var(--font-stamp);
		font-size: 1.05rem;
		letter-spacing: 0.04em;
		text-transform: uppercase;
		font-weight: 400;
	}

	li span {
		font-size: 0.92rem;
		opacity: 0.8;
	}

	.cta {
		display: inline-flex;
		margin-top: 1.5rem;
		padding: 0.7rem 1.05rem;
		font-family: var(--font-stamp);
		font-size: 0.95rem;
		letter-spacing: 0.05em;
		text-transform: uppercase;
		background: var(--yellow);
		color: var(--ink);
		box-shadow: 4px 5px 0 rgba(0, 0, 0, 0.45);
		transform: rotate(-1deg);
		transition:
			transform 0.2s var(--ease),
			background 0.2s ease;
	}

	.cta:hover {
		background: var(--cream);
		transform: rotate(0deg) translateY(-2px);
	}

	@keyframes drift {
		from {
			transform: scale(1.04);
		}
		to {
			transform: scale(1.1) translate(-1%, 1%);
		}
	}

	@media (max-width: 700px) {
		.overlay-art {
			inset: auto -20% 0 30%;
			opacity: 0.3;
		}
	}
</style>
