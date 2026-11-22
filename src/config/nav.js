// Le icone accompagnano le voci solo nel menu a tutto schermo del telefono:
// nella barra del desktop sarebbero rumore. Nomi del set lucide, gia'
// disponibile via astro-icon.
export const nav = [
	{
		title: 'Home',
		slug: '/',
		icona: 'lucide:house',
	},
	{
		title: 'Eventi',
		slug: '/eventi',
		icona: 'lucide:calendar-days',
	},
	{
		title: 'Chi siamo',
		slug: '/company/about',
		icona: 'lucide:users',
	},
	{
		title: 'La scuola',
		slug: '/scuola',
		icona: 'lucide:graduation-cap',
		// Sottomenu: sul desktop si apre al passaggio del mouse o con la
		// freccia accanto alla voce, nel menu del telefono e' sempre visibile.
		figli: [
			{
				title: 'I nostri corsi',
				slug: '/scuola/corsi',
			},
		],
	},
	{
		title: 'Contatti',
		slug: '/company/contact',
		icona: 'lucide:mail',
	},
];
