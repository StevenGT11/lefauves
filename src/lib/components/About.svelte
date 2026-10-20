<script lang="ts">
	import { reveal } from '../attach/reveal.js';
</script>

<section id="about" class="about" {@attach reveal(0.12)}>
	<div class="frame">
		<figure class="shot">
			<img src="/art/studio-03.jpg" alt="John Paul Fauves in studio wearing a painted Mickey mask while working" />
		</figure>
		<div class="copy">
			<p class="kicker">studio · san josé</p>
			<h2>Mask on. Ego off.</h2>
			<p>
				John Paul Fauves builds neo-expressionist / neo-pop collisions — Mickey, Marilyn, masks,
				scribbles, drips — until familiar icons go feral. Paint stays loud. Canvas stays honest.
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
		padding: clamp(2rem, 6vh, 3.5rem) clamp(0.75rem, 2.5vw, 1.5rem) clamp(3rem, 8vh, 5rem);
		background:
			linear-gradient(180deg, var(--canvas), color-mix(in oklab, var(--pink) 12%, var(--canvas)));
	}

	.frame {
		width: min(100%, 72rem);
		margin: 0 auto;
		display: grid;
		grid-template-columns: 1.15fr 0.85fr;
		gap: clamp(1.25rem, 3vw, 2.5rem);
		align-items: end;
		opacity: 0;
		transform: translateY(1.5rem);
		transition:
			opacity 0.85s var(--ease),
			transform 0.85s var(--ease);
	}

	.about:global(.visible) .frame {
		opacity: 1;
		transform: none;
	}

	.shot {
		margin: 0;
		position: relative;
		box-shadow: 14px 20px 0 color-mix(in oklab, var(--ink) 18%, transparent);
		transform: rotate(-1.2deg);
		overflow: hidden;
		clip-path: polygon(0 0, 100% 1.5%, 98.5% 100%, 1% 98%);
	}

	.shot img {
		width: 100%;
		aspect-ratio: 3 / 2;
		object-fit: cover;
		object-position: center 20%;
	}

	.copy {
		padding: 1.1rem 1.15rem 1.25rem;
		background: var(--cream);
		border: 2px solid color-mix(in oklab, var(--ink) 55%, transparent);
		box-shadow: 8px 10px 0 color-mix(in oklab, var(--azure) 35%, transparent);
		transform: rotate(1.5deg);
	}

	.kicker {
		margin: 0 0 0.4rem;
		font-family: var(--font-hand);
		font-size: 1.25rem;
		color: var(--pink);
	}

	h2 {
		margin: 0 0 0.85rem;
		font-family: var(--font-stamp);
		font-size: clamp(2rem, 4.5vw, 3.2rem);
		line-height: 0.95;
		text-transform: uppercase;
	}

	p {
		margin: 0 0 0.85rem;
		font-size: 1.02rem;
	}

	.hand {
		font-family: var(--font-hand);
		font-size: 1.45rem;
		line-height: 1.15;
		color: var(--blood);
	}

	ul {
		margin: 1rem 0 0;
		padding: 0;
		list-style: none;
		display: grid;
		gap: 0.4rem;
	}

	li {
		font-family: var(--font-stamp);
		font-size: 0.95rem;
		letter-spacing: 0.04em;
		text-transform: uppercase;
		padding: 0.4rem 0;
		border-top: 1px dashed color-mix(in oklab, var(--ink) 30%, transparent);
	}

	@media (max-width: 860px) {
		.frame {
			grid-template-columns: 1fr;
		}

		.shot,
		.copy {
			transform: none;
		}

		.shot img {
			aspect-ratio: 4 / 3;
		}
	}
</style>
