export const contact = {
	email: 'studio@johnpaulfauves.com',
	whatsapp: '+1 424-388-2669',
	whatsappHref: 'https://wa.me/14243882669',
	instagram: '@lefauves',
	instagramHref: 'https://www.instagram.com/lefauves',
	studio: 'San José, Costa Rica',
	shipping: 'Worldwide collector inquiries · international shipping'
} as const;

/** Long-home anchors — land on `/` sections from any route */
export const homeAnchors = [
	{ href: '/#work', label: 'Work' },
	{ href: '/#collect', label: 'Collect' },
	{ href: '/#about', label: 'Studio' },
	{ href: '/#process', label: 'Process' },
	{ href: '/#events', label: 'Events' },
	{ href: '/#press', label: 'Press' },
	{ href: '/#contact', label: 'Contact' }
] as const;

/** Full individual pages (dual IA with the long home) */
export const pageRoutes = [
	{ href: '/collections', label: 'Collections' },
	{ href: '/artist-story', label: 'Artist Story' },
	{ href: '/studio', label: 'Studio' },
	{ href: '/one-of-one-commission', label: 'Commission' },
	{ href: '/upcoming-events', label: 'Events' },
	{ href: '/21-grams-cdmx', label: '21 Grams' },
	{ href: '/contact', label: 'Contact' }
] as const;

/** @deprecated use homeAnchors — kept for any leftover imports */
export const navLinks = homeAnchors;

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
