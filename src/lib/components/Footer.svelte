<footer class="footer">
	<p>© {new Date().getFullYear()} John Paul Fauves · @lefauves</p>
	<p class="hand">paint loud · ship worldwide</p>
</footer>

<style>
	.footer {
		display: flex;
		flex-wrap: wrap;
		gap: 0.5rem 1.5rem;
		justify-content: space-between;
		align-items: baseline;
		padding: 1.25rem clamp(0.9rem, 3vw, 2rem) 2rem;
		border-top: 2px solid color-mix(in oklab, var(--ink) 18%, transparent);
		font-family: var(--font-stamp);
		font-size: 0.85rem;
		letter-spacing: 0.06em;
		text-transform: uppercase;
		opacity: 0.75;
	}

	.hand {
		font-family: var(--font-hand);
		font-size: 1.2rem;
		letter-spacing: 0;
		text-transform: none;
		opacity: 1;
		color: var(--pink);
	}

	p {
		margin: 0;
	}
</style>
