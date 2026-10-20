import type { Attachment } from 'svelte/attachments';

/** Adds `visible` class once the element intersects the viewport. */
export function reveal(threshold = 0.15): Attachment {
	return (element) => {
		const observer = new IntersectionObserver(
			([entry]) => {
				if (entry?.isIntersecting) {
					element.classList.add('visible');
					observer.disconnect();
				}
			},
			{ threshold }
		);
		observer.observe(element);
		return () => observer.disconnect();
	};
}
