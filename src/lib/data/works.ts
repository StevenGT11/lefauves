export type Work = {
	id: string;
	title: string;
	note: string;
	year: string;
	src: string;
	alt: string;
	/** collage placement hints — desktop wall */
	slot: 'hero' | 'tall' | 'wide' | 'scrap';
};

export const works: Work[] = [
	{
		id: 'true-bros',
		title: 'True Bros',
		note: 'Mickey / SpongeBob hybrid · drips · graffiti',
		year: 'studio',
		src: '/art/true-bros.png',
		alt: 'Painting True Bros — hybrid bust with Mickey and SpongeBob on blue canvas with graffiti lettering',
		slot: 'hero'
	},
	{
		id: 'marilyn',
		title: 'See Beyond',
		note: 'Marilyn mashup · pink / cream / azure bands',
		year: '21 grams',
		src: '/art/marilyn-collage.png',
		alt: 'Painting — Marilyn collage with Mickey ear, paint drips, and handwritten text on pink cream azure bands',
		slot: 'tall'
	},
	{
		id: 'guchez',
		title: 'Guchez',
		note: 'Hybrid grin · Balenciaga stamp · scribbles',
		year: 'studio',
		src: '/art/studio-05.jpeg',
		alt: 'Painting — yellow hybrid face with blue eyes, green ears, black drips and Guchez lettering',
		slot: 'wide'
	},
	{
		id: 'buck-grin',
		title: 'Buck Grin',
		note: 'Neo-expressionist mashup · charcoal ground',
		year: 'studio',
		src: '/art/studio-04.jpeg',
		alt: 'Painting — chaotic hybrid face with yellow accents and FAUVES signature on dark ground',
		slot: 'scrap'
	},
	{
		id: 'studio-mask',
		title: 'Live Mask',
		note: 'Painted Mickey · studio floor · wet paint',
		year: 'process',
		src: '/art/studio-02.png',
		alt: 'Studio process photo — painted Mickey mask and wet paint on the floor',
		slot: 'scrap'
	},
	{
		id: 'f-mark',
		title: 'F Stamp',
		note: 'Brand mark pulled from the canvas',
		year: 'mark',
		src: '/art/studio-07.png',
		alt: 'Painted F letter mark from a Fauves canvas',
		slot: 'scrap'
	}
];
