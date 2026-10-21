<script lang="ts">
	import { page } from '$app/state';
	import { pageRoutes } from '../data/site.js';

	let open = $state(false);

	function close() {
		open = false;
	}

	function isPageActive(href: string) {
		const path = page.url.pathname;
		return path === href || path.startsWith(`${href}/`);
	}
</script>

<header class="nav" class:open>
	<a class="brand" href="/" onclick={close}>
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
		{#each pageRoutes as link, i (link.href)}
			<a
				href={link.href}
				onclick={close}
				class:active={isPageActive(link.href)}
				aria-current={isPageActive(link.href) ? 'page' : undefined}
				style:--i={i}
			>
				{link.label}
			</a>
		{/each}
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
		flex-wrap: wrap;
		justify-content: flex-end;
		gap: 0.28rem;
		max-width: min(100%, 46rem);
	}

	.links a {
		padding: 0.45rem 0.65rem;
		font-family: var(--font-stamp);
		font-size: 0.78rem;
		letter-spacing: 0.04em;
		text-transform: uppercase;
		color: var(--cream);
		transform: rotate(var(--r, -1deg));
		transition:
			background 0.2s ease,
			transform 0.2s var(--ease),
			box-shadow 0.2s ease;
		background: var(--ink);
	}

	.links a:nth-child(1) {
		--r: -2deg;
		background: var(--pink);
	}
	.links a:nth-child(2) {
		--r: 1.4deg;
		background: var(--azure);
	}
	.links a:nth-child(3) {
		--r: -1.2deg;
		background: var(--blood);
	}
	.links a:nth-child(4) {
		--r: 1.6deg;
		background: color-mix(in oklab, var(--ink) 80%, var(--yellow));
	}
	.links a:nth-child(5) {
		--r: -0.8deg;
		background: var(--true-blue);
	}
	.links a:nth-child(6) {
		--r: 1deg;
		background: var(--ink);
	}
	.links a:nth-child(7) {
		--r: -1.4deg;
		background: color-mix(in oklab, var(--pink) 70%, var(--ink));
	}

	.links a.active {
		background: var(--yellow);
		color: var(--ink);
		box-shadow: 0 0 0 2px var(--ink);
	}

	.links a:hover {
		transform: rotate(0deg) translateY(-2px) scale(1.04);
		background: var(--yellow);
		color: var(--ink);
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

	@media (max-width: 980px) {
		.menu-btn {
			display: grid;
		}

		.links {
			position: fixed;
			inset: 0;
			z-index: 1;
			max-width: none;
			flex-direction: column;
			flex-wrap: nowrap;
			justify-content: center;
			align-items: stretch;
			gap: 0.55rem;
			padding: 5rem 1.25rem;
			background:
				linear-gradient(160deg, color-mix(in oklab, var(--pink) 55%, var(--canvas)), var(--canvas) 60%);
			opacity: 0;
			visibility: hidden;
			pointer-events: none;
			transition:
				opacity 0.3s var(--ease),
				visibility 0.3s;
		}

		.open .links {
			opacity: 1;
			visibility: visible;
			pointer-events: auto;
		}

		.links a {
			font-size: clamp(1.45rem, 7vw, 2.2rem);
			padding: 0.85rem 1.1rem;
			text-align: left;
			transform: none !important;
			box-shadow: 6px 8px 0 color-mix(in oklab, var(--ink) 25%, transparent);
		}
	}
</style>
