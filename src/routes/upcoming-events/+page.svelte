<script lang="ts">
	import PageBanner from '#lib/components/PageBanner.svelte';
	import { live } from '#lib/data/live.js';
</script>

<svelte:head>
	<title>Upcoming Events · FAUVES</title>
	<meta
		name="description"
		content="Private shows, live painting, and upcoming Fauves experiences — including 21 Grams CDMX."
	/>
</svelte:head>

<section class="events">
	<PageBanner
		kicker="private shows & live rooms"
		title="Get in"
		accent="the room."
		lede="Exhibitions, live painting, private viewings, collection releases, collector-only drops."
	/>

	<a class="show" href="/21-grams-cdmx">
		<img src={live.gramsPoster.src} alt={live.gramsPoster.alt} />
		<div class="meta">
			<p class="kicker">featured</p>
			<h2>21 Grams · CDMX</h2>
			<p>Upcoming solo show — memoria, inocencia, máscaras.</p>
			<span>open the poster →</span>
		</div>
	</a>

	<ul class="list">
		<li>
			<strong>Private shows</strong>
			<span>Invitation-only viewings and collection releases.</span>
		</li>
		<li>
			<strong>Live painting</strong>
			<span>Sessions where the canvas still drips in the room.</span>
		</li>
		<li>
			<strong>Mask rooms</strong>
			<span>Hand-painted masks · live models · dual identity.</span>
		</li>
		<li>
			<strong>Collector drops</strong>
			<span>Ask for the invite list — WhatsApp / studio email.</span>
		</li>
	</ul>

	<a class="cta" href="/contact">request an invite</a>
</section>

<style>
	.events {
		padding-bottom: clamp(3rem, 8vh, 5rem);
		background: var(--canvas);
	}

	.show {
		display: grid;
		grid-template-columns: 1.1fr 0.9fr;
		gap: 1rem;
		width: min(100%, 74rem);
		margin: 0 auto;
		padding: 0 clamp(0.75rem, 2vw, 1.5rem);
		align-items: center;
		color: inherit;
	}

	.show img {
		width: 100%;
		aspect-ratio: 4 / 5;
		object-fit: cover;
		transform: rotate(-2deg);
		clip-path: polygon(0 1%, 100% 0, 98% 100%, 1% 97%);
		box-shadow: 14px 20px 44px rgba(0, 0, 0, 0.25);
	}

	.meta {
		padding: 1.1rem 1rem;
		background: var(--ink);
		color: var(--cream);
		transform: rotate(1.4deg);
		clip-path: polygon(0 2%, 100% 0, 98% 100%, 1% 96%);
	}

	.kicker {
		margin: 0 0 0.35rem;
		font-family: var(--font-hand);
		font-size: 1.3rem;
		color: var(--yellow);
	}

	.meta h2 {
		margin: 0;
		font-family: var(--font-stamp);
		font-size: clamp(2rem, 5vw, 3rem);
		line-height: 0.92;
		text-transform: uppercase;
		color: var(--pink);
	}

	.meta p:nth-of-type(2) {
		margin: 0.7rem 0 1rem;
		opacity: 0.85;
	}

	.meta span {
		font-family: var(--font-stamp);
		letter-spacing: 0.05em;
		text-transform: uppercase;
		font-size: 0.9rem;
		color: var(--yellow);
	}

	.list {
		width: min(100%, 72rem);
		margin: 2rem auto 0;
		padding: 0 clamp(0.9rem, 3vw, 1.5rem);
		list-style: none;
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		gap: 0.75rem;
	}

	.list li {
		display: grid;
		gap: 0.25rem;
		padding: 0.9rem 0.95rem;
		background: var(--cream);
		border: 2px solid color-mix(in oklab, var(--ink) 35%, transparent);
		transform: rotate(-0.8deg);
	}

	.list li:nth-child(even) {
		transform: rotate(1deg);
		background: color-mix(in oklab, var(--azure) 18%, var(--cream));
	}

	.list strong {
		font-family: var(--font-stamp);
		text-transform: uppercase;
		letter-spacing: 0.04em;
		font-weight: 400;
	}

	.list span {
		opacity: 0.8;
		font-size: 0.95rem;
	}

	.cta {
		display: inline-flex;
		margin: 1.75rem clamp(0.9rem, 3vw, 2rem) 0;
		padding: 0.75rem 1.1rem;
		font-family: var(--font-stamp);
		letter-spacing: 0.05em;
		text-transform: uppercase;
		background: var(--yellow);
		color: var(--ink);
		box-shadow: 4px 5px 0 rgba(0, 0, 0, 0.35);
		transform: rotate(-1deg);
	}

	.cta:hover {
		background: var(--pink);
		color: var(--cream);
	}

	@media (max-width: 800px) {
		.show,
		.list {
			grid-template-columns: 1fr;
		}
	}
</style>
