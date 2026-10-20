<footer class="footer">
	<p class="mark">© {new Date().getFullYear()} John Paul Fauves · @lefauves</p>
	<p class="hand">paint loud · ship worldwide</p>
</footer>

<style>
	.footer {
		display: flex;
		flex-wrap: wrap;
		gap: 0.55rem 1.75rem;
		justify-content: space-between;
		align-items: baseline;
		padding: 1.35rem clamp(0.9rem, 3vw, 2rem) 2.25rem;
		background:
			linear-gradient(180deg, transparent, color-mix(in oklab, var(--pink) 8%, var(--canvas)));
		border-top: 3px solid color-mix(in oklab, var(--ink) 22%, transparent);
	}

	.mark {
		margin: 0;
		font-family: var(--font-stamp);
		font-size: 0.88rem;
		letter-spacing: 0.06em;
		text-transform: uppercase;
		opacity: 0.72;
		transform: rotate(-0.8deg);
	}

	.hand {
		margin: 0;
		font-family: var(--font-hand);
		font-size: 1.35rem;
		color: var(--pink);
		transform: rotate(1.5deg);
	}
</style>
