/** Official assets pulled from johnpaulfauves.com CDN (filesafe) into /static/live/ */

const CDN = 'https://assets.cdn.filesafe.space/WE1iuI8fwWpx8QBgihlU/media';

export type LiveAsset = {
	id: string;
	src: string;
	cdn: string;
	alt: string;
};

function asset(id: string, alt: string): LiveAsset {
	return {
		id,
		src: `/live/${id}`,
		cdn: `${CDN}/${id}`,
		alt
	};
}

export const live = {
	logoMark: asset('6a02ac10c56db4013f5d28b8.png', 'Lefauves F mark'),
	portraitBrand: asset('6a04ea448c6475e185e55c89.png', 'John Paul Fauves brand portrait'),
	navPortrait: asset('6a02872d60a7a52fdc15e0c7.png', 'Artist portrait crop'),
	studioProcessA: asset('6a064414a97d962a35e31c0b.png', 'Studio process still'),
	homeWorkA: asset('6a02ae15f07c4898894520ef.jpg', 'Recent original canvas'),
	homeWorkB: asset('6a02afb5f07c4898894563f2.jpg', 'Collector favorite painting'),
	homeWorkC: asset('6a02b11660a7a52fdc1e6cae.png', 'Large-format statement piece'),
	homeWorkD: asset('6a02b48e85b418d57ced472e.png', 'Studio original with graffiti'),
	homeWorkE: asset('6a02b54360a7a52fdc1f18d5.png', 'Expressive character canvas'),
	landingPoster: asset('6a046fb00c147b8eeac6fda2.jpeg', 'Lefauves landing still'),
	landingHero: asset('6a061dca4253bece0d3931c9.png', 'Landing hero artwork'),
	collectionA: asset('6a065847a97d962a35e73251.jpeg', 'Collection piece A'),
	collectionB: asset('6a0658560da521d66f02a666.jpeg', 'Collection piece B'),
	collectionC: asset('6a065880cf7891b0fac2e980.jpeg', 'Collection piece C'),
	collectionD: asset('6a06588fcf7891b0fac2eb8d.jpeg', 'Collection piece D'),
	artistStoryHero: asset('6a0658f4c56db4013f77279f.jpg', 'Artist with painted mask in studio'),
	artistStoryWide: asset('6a065b70fde8a86ce6e0cf8a.jpg', 'Wide studio narrative photograph'),
	commissionHero: asset('6a0b2333c56db4013f935858.jpeg', 'Commission studio photograph'),
	studioFloor: asset('6a0b258260b3f1e04a9a12fa.jpg', 'Behind the scenes studio floor'),
	studioDetail: asset('6a0b259f2e98e28fa19c3c4f.png', 'Studio artwork detail'),
	commissionMark: asset('6a0b6b9d8d08689eb2d4354c.png', 'One of one commission visual'),
	gramsPoster: asset('6a1d1b86ff82912d65c9bfc8.png', '21 Grams CDMX solo show poster')
} as const;

export const collectionWall = [
	live.homeWorkA,
	live.homeWorkB,
	live.homeWorkC,
	live.collectionA,
	live.collectionB,
	live.homeWorkD,
	live.collectionC,
	live.collectionD,
	live.homeWorkE
] as const;

export const studioStrip = [
	live.studioFloor,
	live.studioDetail,
	live.studioProcessA,
	live.artistStoryHero,
	live.commissionHero
] as const;
