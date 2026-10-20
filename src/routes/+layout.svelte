<script lang="ts">
	import favicon from '#lib/assets/favicon.svg';
	import '../app.css';
	import Nav from '#lib/components/Nav.svelte';
	import Footer from '#lib/components/Footer.svelte';
	import type { LayoutProps } from './$types';

	let { children }: LayoutProps = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous" />
	<link
		href="https://fonts.googleapis.com/css2?family=Anton&family=Caveat:wght@500;600;700&family=Space+Grotesk:wght@500;600;700&display=swap"
		rel="stylesheet"
	/>
	<meta
		name="description"
		content="John Paul Fauves (@lefauves) — raw neo-expressionist collage paintings from San José. Real canvases, masks, Mickey corruption."
	/>
	<meta property="og:title" content="FAUVES · John Paul Fauves" />
	<meta property="og:description" content="The paintings are the site. Real canvases. Real drips." />
	<meta property="og:image" content="/art/marilyn-collage.png" />
	<meta name="theme-color" content="#ebe4d4" />
	<title>FAUVES · John Paul Fauves</title>
</svelte:head>

<a class="skip" href="#work">Skip to canvases</a>
<Nav />
<main>
	{@render children()}
</main>
<Footer />

<style>
	.skip {
		position: absolute;
		left: 1rem;
		top: -4rem;
		z-index: 300;
		padding: 0.6rem 0.85rem;
		background: var(--yellow);
		color: var(--ink);
		font-family: var(--font-stamp);
		transition: top 0.2s ease;
	}

	.skip:focus {
		top: 1rem;
	}

	main {
		overflow-x: clip;
	}
</style>
