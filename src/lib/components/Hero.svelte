<section id="top" class="hero" aria-label="John Paul Fauves">
	<div class="wall" aria-hidden="true">
		<figure class="layer back">
			<img src="/art/true-bros.png" alt="" />
		</figure>
		<figure class="layer front">
			<img src="/art/marilyn-collage.png" alt="" />
		</figure>
		<img class="drips" src="/art/drip-overlay.svg" alt="" />
		<div class="scrim"></div>
	</div>

	<div class="graffiti">
		<p class="note">san josé · @lefauves · originals</p>
		<h1>
			<span class="line john">JOHN PAUL</span>
			<span class="line name">FAUVES</span>
		</h1>
		<p class="hand">
			memoria · inocencia · máscaras — paint that still drips
		</p>
		<div class="actions">
			<a class="btn" href="/collections">see the canvases</a>
			<a class="btn ghost" href="/contact">collector / DM</a>
		</div>
	</div>
</section>

<style>
	.hero {
		position: relative;
		isolation: isolate;
		min-height: 100svh;
		display: grid;
		align-items: end;
		overflow: clip;
		background: var(--charcoal);
	}

	.wall {
		position: absolute;
		inset: 0;
		z-index: 0;
	}

	.layer {
		margin: 0;
		position: absolute;
		overflow: hidden;
		box-shadow: 0 18px 50px rgba(0, 0, 0, 0.45);
	}

	.layer img {
		width: 100%;
		height: 100%;
		object-fit: cover;
		filter: contrast(1.05) saturate(1.05);
	}

	.back {
		inset: -4% 18% 8% -8%;
		clip-path: polygon(0 0, 100% 3%, 97% 100%, 2% 96%);
		transform: rotate(-3deg) scale(1.08);
		animation: drift 22s ease-in-out alternate both;
		z-index: 1;
	}

	.front {
		inset: 12% -6% -2% 28%;
		clip-path: polygon(3% 0, 100% 2%, 98% 97%, 0 100%);
		transform: rotate(2.5deg);
		animation: drift-alt 26s ease-in-out alternate both;
		z-index: 2;
		border: 3px solid color-mix(in oklab, var(--cream) 35%, transparent);
	}

	.drips {
		position: absolute;
		inset: 0;
		width: 100%;
		height: 100%;
		object-fit: cover;
		opacity: 0.28;
		mix-blend-mode: multiply;
		z-index: 3;
		pointer-events: none;
	}

	.scrim {
		position: absolute;
		inset: 0;
		z-index: 4;
		background:
			linear-gradient(to top, rgba(20, 20, 20, 0.88) 0%, rgba(20, 20, 20, 0.25) 42%, transparent 68%),
			linear-gradient(115deg, rgba(20, 20, 20, 0.55) 0%, transparent 48%);
	}

	.graffiti {
		position: relative;
		z-index: 5;
		width: min(100%, 72rem);
		padding: 5.5rem clamp(0.9rem, 3vw, 2rem) 3.25rem;
		color: var(--cream);
	}

	.note {
		margin: 0 0 0.75rem;
		font-family: var(--font-hand);
		font-size: clamp(1.2rem, 2.5vw, 1.6rem);
		transform: rotate(-3deg);
		opacity: 0;
		animation: stamp-in 0.8s 0.1s var(--ease) both;
	}

	h1 {
		margin: 0;
		font-family: var(--font-stamp);
		line-height: 0.82;
		text-transform: uppercase;
	}

	.line {
		display: block;
		opacity: 0;
		transform: translateY(1.2rem);
		animation: rise 0.9s var(--ease) both;
	}

	.john {
		font-size: clamp(2rem, 7vw, 4.5rem);
		letter-spacing: 0.02em;
		animation-delay: 0.2s;
		text-shadow: 2px 3px 0 rgba(0, 0, 0, 0.55);
	}

	.name {
		font-size: clamp(3.4rem, 15vw, 9.5rem);
		color: var(--yellow);
		letter-spacing: -0.02em;
		text-shadow:
			4px 5px 0 var(--ink),
			-2px -1px 0 var(--pink);
		animation-delay: 0.35s;
	}

	.hand {
		max-width: 26rem;
		margin: 1.1rem 0 0;
		font-family: var(--font-hand);
		font-size: clamp(1.35rem, 3vw, 1.85rem);
		line-height: 1.15;
		opacity: 0;
		animation: stamp-in 0.85s 0.55s var(--ease) both;
	}

	.actions {
		display: flex;
		flex-wrap: wrap;
		gap: 0.65rem;
		margin-top: 1.5rem;
		opacity: 0;
		animation: rise 0.85s 0.7s var(--ease) both;
	}

	.btn {
		display: inline-flex;
		align-items: center;
		min-height: 2.9rem;
		padding: 0.65rem 1.1rem;
		font-family: var(--font-stamp);
		font-size: 0.95rem;
		letter-spacing: 0.05em;
		text-transform: uppercase;
		background: var(--cream);
		color: var(--ink);
		box-shadow: 4px 5px 0 rgba(0, 0, 0, 0.45);
		transform: rotate(-1deg);
		transition:
			transform 0.2s var(--ease),
			background 0.2s ease;
	}

	.btn:hover {
		transform: rotate(0deg) translateY(-2px);
		background: var(--yellow);
	}

	.ghost {
		background: transparent;
		color: var(--cream);
		border: 2px solid color-mix(in oklab, var(--cream) 70%, transparent);
		box-shadow: none;
	}

	.ghost:hover {
		background: var(--pink);
		border-color: var(--pink);
		color: var(--cream);
	}

	@keyframes drift {
		from {
			transform: rotate(-3deg) scale(1.08) translate(0, 0);
		}
		to {
			transform: rotate(-2deg) scale(1.12) translate(-1.5%, 1%);
		}
	}

	@keyframes drift-alt {
		from {
			transform: rotate(2.5deg) translate(0, 0);
		}
		to {
			transform: rotate(1.5deg) translate(1.5%, -1%);
		}
	}

	@keyframes rise {
		to {
			opacity: 1;
			transform: none;
		}
	}

	@keyframes stamp-in {
		from {
			opacity: 0;
			transform: rotate(-6deg) scale(1.05);
		}
		to {
			opacity: 1;
			transform: rotate(-3deg);
		}
	}

	@media (max-width: 700px) {
		.back {
			inset: -2% 0 35% -10%;
		}

		.front {
			inset: 28% -12% 0 8%;
		}

		.hand {
			animation-name: rise;
		}

		.hand,
		.note {
			transform: none;
		}
	}
</style>
