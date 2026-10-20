export const contact = {
	email: 'studio@johnpaulfauves.com',
	whatsapp: '+1 424-388-2669',
	whatsappHref: 'https://wa.me/14243882669',
	instagram: '@lefauves',
	instagramHref: 'https://www.instagram.com/lefauves',
	studio: 'San José, Costa Rica',
	shipping: 'Worldwide collector inquiries · international shipping'
} as const;

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

export const igStrip = [
	{ src: '/art/true-bros.png', alt: 'True Bros canvas detail' },
	{ src: '/art/marilyn-collage.png', alt: 'Marilyn collage detail' },
	{ src: '/art/studio-05.jpeg', alt: 'Guchez painting' },
	{ src: '/art/studio-03.jpg', alt: 'Studio mask session' },
	{ src: '/art/studio-04.jpeg', alt: 'Buck Grin painting' },
	{ src: '/art/studio-01.jpeg', alt: 'Studio wall and Mickey canvas' },
	{ src: '/art/studio-02.png', alt: 'Process paint on floor' },
	{ src: '/art/studio-06.png', alt: 'Close studio painting detail' }
] as const;

export const navLinks = [
	{ href: '#work', label: 'Work' },
	{ href: '#collect', label: 'Collect' },
	{ href: '#about', label: 'Studio' },
	{ href: '#press', label: 'Press' },
	{ href: '#contact', label: 'Contact' }
] as const;
