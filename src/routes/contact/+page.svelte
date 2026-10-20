<script lang="ts">
	import PageBanner from '#lib/components/PageBanner.svelte';
	import { contact } from '#lib/data/site.js';
	import { live } from '#lib/data/live.js';

	const wires = [
		{
			label: 'email',
			value: contact.email,
			href: `mailto:${contact.email}`,
			rot: -2.4
		},
		{
			label: 'whatsapp',
			value: contact.whatsapp,
			href: contact.whatsappHref,
			rot: 1.8
		},
		{
			label: 'instagram',
			value: contact.instagram,
			href: contact.instagramHref,
			rot: -1.2
		}
	] as const;
</script>

<svelte:head>
	<title>Contact · FAUVES</title>
	<meta
		name="description"
		content="Contact John Paul Fauves studio — WhatsApp, email, San José by appointment, worldwide shipping."
	/>
</svelte:head>

<section class="contact">
	<PageBanner
		kicker="hit the studio"
		title="Collect."
		accent="Commission. Visit."
		lede="Worldwide inquiries · San José by appointment · shipping ready."
	/>

	<div class="board">
		<img class="bg" src={live.landingPoster.src} alt="" aria-hidden="true" />
		<img class="layer" src={live.homeWorkB.src} alt="" aria-hidden="true" />
		<img class="drips" src="/art/drip-overlay.svg" alt="" aria-hidden="true" />
		<div class="veil"></div>

		<div class="content">
			<p class="wall-note" aria-hidden="true">WRITE ME</p>
			<div class="scraps">
				{#each wires as wire, i (wire.href)}
					<a
						class="scrap"
						href={wire.href}
						rel={wire.href.startsWith('http') ? 'noopener noreferrer' : undefined}
						target={wire.href.startsWith('http') ? '_blank' : undefined}
						style:--rot="{wire.rot}deg"
						style:--i={i}
					>
						<span>{wire.label}</span>
						<strong>{wire.value}</strong>
					</a>
				{/each}
			</div>
			<p class="meta">{contact.studio} · {contact.shipping}</p>
		</div>
	</div>
</section>

<style>
	.contact {
		padding-bottom: clamp(3rem, 8vh, 5rem);
		background: linear-gradient(180deg, var(--canvas) 0%, var(--void) 55%);
	}

	.board {
		position: relative;
		isolation: isolate;
		width: min(100%, 74rem);
		margin: 0 auto;
		min-height: clamp(28rem, 70vh, 40rem);
		overflow: hidden;
		clip-path: polygon(0 1.5%, 100% 0, 99% 100%, 1% 97.5%);
		box-shadow: 0 28px 70px rgba(0, 0, 0, 0.35);
	}

	.bg,
	.layer,
	.drips,
	.veil {
		position: absolute;
		inset: 0;
	}

	.bg {
		width: 100%;
		height: 100%;
		object-fit: cover;
		filter: contrast(1.08) saturate(1.1);
		z-index: 0;
	}

	.layer {
		inset: 10% -10% -8% 40%;
		object-fit: cover;
		opacity: 0.5;
		mix-blend-mode: soft-light;
		transform: rotate(3deg);
		z-index: 1;
		pointer-events: none;
	}

	.drips {
		width: 100%;
		height: 100%;
		object-fit: cover;
		opacity: 0.26;
		mix-blend-mode: multiply;
		z-index: 2;
		pointer-events: none;
	}

	.veil {
		z-index: 3;
		background: linear-gradient(to top, rgba(12, 12, 12, 0.9), rgba(12, 12, 12, 0.25) 55%, rgba(12, 12, 12, 0.15));
	}

	.content {
		position: relative;
		z-index: 4;
		padding: clamp(1.5rem, 4vw, 2.75rem);
		color: var(--cream);
		display: grid;
		align-content: end;
		min-height: inherit;
		gap: 1.25rem;
	}

	.wall-note {
		position: absolute;
		top: 8%;
		right: 6%;
		margin: 0;
		font-family: var(--font-hand);
		font-size: clamp(2.4rem, 8vw, 4.5rem);
		color: var(--yellow);
		opacity: 0.72;
		transform: rotate(12deg);
		text-shadow: 2px 3px 0 rgba(0, 0, 0, 0.55);
		pointer-events: none;
	}

	.scraps {
		display: grid;
		gap: 0.85rem;
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
		transform: rotate(var(--rot));
		transition:
			transform 0.2s var(--ease),
			background 0.2s ease;
	}

	.scrap:nth-child(2) {
		background: color-mix(in oklab, var(--pink) 88%, var(--cream));
		color: var(--cream);
	}

	.scrap:nth-child(3) {
		background: color-mix(in oklab, var(--azure) 85%, var(--cream));
		color: var(--cream);
	}

	.scrap:hover {
		transform: rotate(0deg) translateY(-3px);
		background: var(--yellow);
		color: var(--ink);
	}

	.scrap span {
		font-family: var(--font-hand);
		font-size: 1.15rem;
	}

	.scrap strong {
		font-family: var(--font-stamp);
		font-size: clamp(1.05rem, 2.6vw, 1.45rem);
		font-weight: 400;
		letter-spacing: 0.03em;
		word-break: break-word;
	}

	.meta {
		margin: 0;
		opacity: 0.8;
		max-width: 36rem;
	}

	@media (min-width: 860px) {
		.scraps {
			grid-template-columns: repeat(3, max-content);
			gap: 1rem;
		}
	}
</style>
