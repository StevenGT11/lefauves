<script lang="ts">
	let open = $state(false);

	function close() {
		open = false;
	}
</script>

<header class="nav" class:open>
	<a class="brand" href="#top" onclick={close}>
		<img class="mark" src="/art/studio-07.png" alt="" />
		<span>
			<em>@lefauves</em>
			<strong>FAUVES</strong>
		</span>
	</a>

	<button
		class="menu-btn"
		type="button"
		aria-expanded={open}
		aria-controls="site-nav"
		onclick={() => (open = !open)}
	>
		<span class="sr-only">{open ? 'Close menu' : 'Open menu'}</span>
		{open ? '✕' : '≡'}
	</button>

	<nav id="site-nav" class="links" aria-label="Primary">
		<a href="#work" onclick={close}>Work</a>
		<a href="#about" onclick={close}>Studio</a>
		<a href="#contact" onclick={close}>Contact</a>
	</nav>
</header>

<style>
	.nav {
		position: fixed;
		inset: 0 0 auto;
		z-index: 200;
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: 1rem;
		padding: 0.75rem clamp(0.75rem, 2.5vw, 1.5rem);
		pointer-events: none;
	}

	.nav > * {
		pointer-events: auto;
	}

	.brand {
		display: flex;
		align-items: center;
		gap: 0.55rem;
		padding: 0.35rem 0.55rem 0.35rem 0.35rem;
		background: color-mix(in oklab, var(--cream) 88%, transparent);
		box-shadow: 3px 4px 0 color-mix(in oklab, var(--ink) 35%, transparent);
		transform: rotate(-1.5deg);
	}

	.mark {
		width: 2.4rem;
		height: 2.4rem;
		object-fit: cover;
		filter: invert(1);
		mix-blend-mode: multiply;
		opacity: 0.9;
	}

	.brand span {
		display: grid;
		line-height: 1;
	}

	.brand em {
		font-family: var(--font-hand);
		font-style: normal;
		font-size: 0.95rem;
		font-weight: 600;
		opacity: 0.75;
	}

	.brand strong {
		font-family: var(--font-stamp);
		font-size: 1.35rem;
		letter-spacing: 0.04em;
	}

	.links {
		display: flex;
		gap: 0.35rem;
	}

	.links a {
		padding: 0.55rem 0.85rem;
		font-family: var(--font-stamp);
		font-size: 0.95rem;
		letter-spacing: 0.06em;
		text-transform: uppercase;
		background: var(--ink);
		color: var(--cream);
		transform: rotate(var(--r, -1deg));
		transition:
			background 0.2s ease,
			transform 0.2s var(--ease);
	}

	.links a:nth-child(1) {
		--r: -2deg;
	}

	.links a:nth-child(2) {
		--r: 1.5deg;
		background: var(--pink);
		color: var(--cream);
	}

	.links a:nth-child(3) {
		--r: -1deg;
		background: var(--azure);
		color: var(--cream);
	}

	.links a:hover {
		transform: rotate(0deg) translateY(-2px) scale(1.04);
	}

	.menu-btn {
		display: none;
		width: 2.85rem;
		height: 2.85rem;
		place-items: center;
		background: var(--ink);
		color: var(--cream);
		font-size: 1.4rem;
		font-weight: 700;
		z-index: 3;
		position: relative;
	}

	@media (max-width: 760px) {
		.menu-btn {
			display: grid;
		}

		.links {
			position: fixed;
			inset: 0;
			z-index: 1;
			flex-direction: column;
			justify-content: center;
			align-items: stretch;
			gap: 0.75rem;
			padding: 5rem 1.25rem;
			background:
				linear-gradient(160deg, color-mix(in oklab, var(--pink) 55%, var(--canvas)), var(--canvas) 60%);
			opacity: 0;
			visibility: hidden;
			pointer-events: none;
			transition: opacity 0.3s var(--ease), visibility 0.3s;
		}

		.open .links {
			opacity: 1;
			visibility: visible;
			pointer-events: auto;
		}

		.links a {
			font-size: clamp(2rem, 10vw, 3rem);
			padding: 1rem 1.1rem;
			text-align: left;
			transform: none !important;
			box-shadow: 6px 8px 0 color-mix(in oklab, var(--ink) 25%, transparent);
		}
	}
</style>
