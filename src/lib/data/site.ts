export const contact = {
	email: 'studio@johnpaulfauves.com',
	whatsapp: '+1 424-388-2669',
	whatsappHref: 'https://wa.me/14243882669',
	instagram: '@lefauves',
	instagramHref: 'https://www.instagram.com/lefauves',
	studio: 'San José, Costa Rica',
	shipping: 'Worldwide collector inquiries · international shipping'
} as const;

/** Mirrors live site IA (johnpaulfauves.com) */
export const navLinks = [
	{ href: '/collections', label: 'Collections' },
	{ href: '/artist-story', label: 'Artist Story' },
	{ href: '/studio', label: 'Studio' },
	{ href: '/one-of-one-commission', label: 'Commission' },
	{ href: '/upcoming-events', label: 'Events' },
	{ href: '/contact', label: 'Contact' }
] as const;

export const homeGates = [
	{
		href: '/collections',
		kicker: 'the work',
		title: 'Collections',
		note: 'Available & recent originals — canvases with presence.',
		rot: -2.2
	},
	{
		href: '/artist-story',
		kicker: 'who paints',
		title: 'Artist Story',
		note: 'Raw, alive, deeply human — Costa Rica → the world.',
		rot: 1.6
	},
	{
		href: '/studio',
		kicker: 'behind',
		title: 'Studio',
		note: 'Process, wet floors, masks — by appointment.',
		rot: -1.1
	},
	{
		href: '/one-of-one-commission',
		kicker: 'make one',
		title: 'One of One',
		note: 'Private commissions for collectors & spaces.',
		rot: 2.0
	},
	{
		href: '/upcoming-events',
		kicker: 'in the room',
		title: 'Events',
		note: 'Private shows, live paint, 21 Grams · CDMX.',
		rot: -1.7
	},
	{
		href: '/contact',
		kicker: 'write',
		title: 'Contact',
		note: 'WhatsApp · email · San José studio.',
		rot: 1.2
	}
] as const;

export const collectPaths = [
	{
		id: 'originals',
		title: 'Available originals',
		note: 'One-of-one canvases ready for private acquisition.',
		tag: 'collect'
	},
	{
		id: 'commissions',
		title: 'Private commissions',
		note: 'Large-format statements for homes, hotels, restaurants, studios.',
		tag: 'make'
	},
	{
		id: 'editions',
		title: 'Limited editions',
		note: 'Selected print drops when the studio opens the vault.',
		tag: 'drop'
	},
	{
		id: 'visits',
		title: 'Studio visits',
		note: 'San José by appointment — wet paint, masks, unfinished walls.',
		tag: 'visit'
	},
	{
		id: 'hospitality',
		title: 'Interiors & hospitality',
		note: 'Placement for spaces that need scale, emotion, presence.',
		tag: 'place'
	},
	{
		id: 'inquiry',
		title: 'Collector inquiry',
		note: 'DM / WhatsApp / email — start with the piece that hits.',
		tag: 'write'
	}
] as const;

export const press = [
	{
		outlet: 'Vogue Italia',
		line: 'Perversions of the familiar — icons cut, layered, made feral.'
	},
	{
		outlet: 'Forbes Italia',
		line: 'Contemporary presence for collectors who want the room to flinch.'
	},
	{
		outlet: 'Hypebeast',
		line: 'Mickey, Marilyn, masks — pop culture with the ego peeled off.'
	},
	{
		outlet: 'VICE',
		line: 'Neo-expressionist collage that refuses polite gallery quiet.'
	},
	{
		outlet: 'Metal Magazine',
		line: 'Identity as costume: public face, private drip.'
	},
	{
		outlet: 'Flaunt',
		line: 'Large-format statements built for walls that can take a punch.'
	}
] as const;

export const artistBeats = [
	{
		year: 'now',
		title: 'Presence over decoration',
		body: 'Work made to shift the energy of a room — identity, tension, soul.'
	},
	{
		year: 'language',
		title: 'Instinct first',
		body: 'Bold characters, expressive color, urban texture, distorted emotion.'
	},
	{
		year: 'place',
		title: 'Costa Rica → collectors',
		body: 'San José studio. Worldwide inquiries. Private visits by appointment.'
	}
] as const;
