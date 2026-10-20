export type Work = {
	id: string;
	title: string;
	note: string;
	year: string;
	src: string;
	alt: string;
};

export const works: Work[] = [
	{
		id: 'true-bros',
		title: 'True Bros',
		note: 'Mickey / SpongeBob hybrid · drips · graffiti',
		year: 'studio',
		src: '/art/true-bros.png',
		alt: 'Painting True Bros — hybrid bust with Mickey and SpongeBob on blue canvas with graffiti lettering'
	},
	{
		id: 'marilyn',
		title: 'See Beyond',
		note: 'Marilyn mashup · pink / cream / azure bands · handwritten notes',
		year: '21 grams',
		src: '/art/marilyn-collage.png',
		alt: 'Painting — Marilyn collage with Mickey ear, paint drips, and handwritten text on pink cream azure bands'
	},
	{
		id: 'guchez',
		title: 'Guchez',
		note: 'Hybrid grin · Balenciaga stamp · scribbles',
		year: 'studio',
		src: '/art/studio-05.jpeg',
		alt: 'Painting — yellow hybrid face with blue eyes, green ears, black drips and Guchez lettering'
	},
	{
		id: 'buck-grin',
		title: 'Buck Grin',
		note: 'Neo-expressionist mashup · charcoal ground',
		year: 'studio',
		src: '/art/studio-04.jpeg',
		alt: 'Painting — chaotic hybrid face with yellow accents and FAUVES signature on dark ground'
	}
];
