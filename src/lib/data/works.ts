import { live } from './live.js';

export type Work = {
	id: string;
	title: string;
	note: string;
	year: string;
	src: string;
	alt: string;
	slot: 'hero' | 'tall' | 'wide' | 'scrap';
};

/** Home work wall — mix of approved art/ + live CDN pulls */
export const works: Work[] = [
	{
		id: 'true-bros',
		title: 'True Bros',
		note: 'Mickey / SpongeBob hybrid · drips · graffiti',
		year: 'studio',
		src: '/art/true-bros.png',
		alt: 'Painting True Bros — hybrid bust with Mickey and SpongeBob',
		slot: 'hero'
	},
	{
		id: 'marilyn',
		title: 'See Beyond',
		note: 'Marilyn mashup · pink / cream / azure bands',
		year: '21 grams',
		src: '/art/marilyn-collage.png',
		alt: 'Marilyn collage with Mickey ear and paint drips',
		slot: 'tall'
	},
	{
		id: 'live-a',
		title: 'Presence',
		note: 'Live site original · large-format',
		year: 'collect',
		src: live.homeWorkA.src,
		alt: live.homeWorkA.alt,
		slot: 'wide'
	},
	{
		id: 'live-b',
		title: 'Favorite',
		note: 'Collector favorite from the vault',
		year: 'studio',
		src: live.homeWorkB.src,
		alt: live.homeWorkB.alt,
		slot: 'scrap'
	},
	{
		id: 'guchez',
		title: 'Guchez',
		note: 'Hybrid grin · stamp · scribbles',
		year: 'studio',
		src: '/art/studio-05.jpeg',
		alt: 'Yellow hybrid face with drips and lettering',
		slot: 'scrap'
	},
	{
		id: 'live-c',
		title: 'Statement',
		note: 'Pulled from johnpaulfauves.com CDN',
		year: 'mark',
		src: live.homeWorkC.src,
		alt: live.homeWorkC.alt,
		slot: 'scrap'
	}
];
