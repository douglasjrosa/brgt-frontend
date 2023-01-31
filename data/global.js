export const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
export const metaTitleSuffix = 'Bragheto Embalagens de Madeira';
export const metadata = {
	twitterCardType: 'summary_large_image',
	metaTitle: 'Paletes de Madeira Fumigada',
	metaDescription:
		'Paletes, Estrados, Engradados e Embalagens de Madeira Fumigada para Transporte e Exportação.',
	twitterUsername: '@braghetopaletes',
	shareImage: {
		name: 'logomarca-bragheto.webp',
		alternativeText: 'Logomarca Bragheto',
		ext: '.webp',
		mime: 'image/webp',
		size: 88.56,
		width: 4796,
		height: 3508,
		url: `${baseUrl}/images/logomarca-bragheto.webp`,
		formats: {
			thumbnail: {
				name: 'logomarca-bragheto.webp',
				ext: '.webp',
				mime: 'image/webp',
				width: 213,
				height: 156,
				size: 5.65,
				url: `${baseUrl}/images/logomarca-bragheto.webp`
			},
			large: {
				name: 'logomarca-bragheto.webp',
				ext: '.webp',
				mime: 'image/webp',
				width: 1000,
				height: 731,
				size: 32.27,
				url: `${baseUrl}/images/logomarca-bragheto.webp`
			},
			medium: {
				name: 'logomarca-bragheto.webp',
				ext: '.webp',
				mime: 'image/webp',
				width: 750,
				height: 549,
				size: 22.46,
				url: `${baseUrl}/images/logomarca-bragheto.webp`
			},
			small: {
				name: 'logomarca-bragheto.webp',
				ext: '.webp',
				mime: 'image/webp',
				width: 500,
				height: 366,
				size: 16.63,
				url: `${baseUrl}/images/logomarca-bragheto.webp`
			}
		}
	}
};
export const notificationBanner = {
	text: 'Este site usa Cookies para melhorar a sua experiência de navegação .'
};
export const navbar = {
	links: [
		{
			newTab: false,
			url: '/',
			text: 'Home'
		},
		{
			newTab: false,
			url: '/empresa',
			text: 'Empresa'
		},
		{
			newTab: false,
			url: '/produtos',
			text: 'Produtos'
		},
		{
			newTab: false,
			url: '/informacoes',
			text: 'Informações'
		},
		{
			newTab: false,
			url: '/contato',
			text: 'Contato'
		}
	],
	logo: {
		name: 'logomarca-bragheto-escuro.png',
		alternativeText: 'Logomarca Bragheto'
	}
};
export const footer = {
	smallText: '© Copyright Bragheto™ (Lei 9610 de 19/02/1998)',
	columns: [
		{
			title: 'Páginas',
			links: [
				{
					newTab: false,
					url: '/',
					text: 'Home'
				},
				{
					newTab: false,
					url: '/empresa',
					text: 'Empresa'
				},
				{
					newTab: false,
					url: '/produtos',
					text: 'Produtos'
				},
				{
					newTab: false,
					url: '/informacoes',
					text: 'Informações'
				},
				{
					newTab: false,
					url: '/contato',
					text: 'Contato'
				}
			]
		},
		{
			title: 'Contatos',
			links: [
				{
					newTab: false,
					url: 'tel:+5516996035543',
					text: '(16) 99603-5543 Virgínia (Vendas)'
				},
				{
					newTab: false,
					url: 'tel:+5516988029535',
					text: '(16) 98802-9535 Daniela (Administrativo)'
				},
				{
					newTab: false,
					url: 'mailto:contato@braghetopaletes.com.br',
					text: 'contato@bragheto...'
				}
			]
		},
		{
			title: 'Localização',
			descriptions: [
				'Rua Dr. Francisco Gugliano, 347',
				'Parque Industrial Tanquinho',
				'Ribeirão Preto SP'
			]
		},
		{
			title: 'Certificação',
			links: [
				{
					newTab: true,
					url: 'https://www.ippc.int/largefiles/NIMF_15_2009_PTFINAL_0.pdf',
					text: 'NIMF-15 (Fumigação)'
				}
			]
		}
	],
	logo: {
		name: 'fumigacao.webp',
		alternativeText: 'Marcação Fumigação NIMF-15',
		width: 155,
		height: 79
	}
};
export const whatsappContacts = [
	{
		nome: 'Virgínia - Comercial',
		fone: '+5516996035543'
	},
	{
		nome: 'Daniela - Administrativo',
		fone: '+5516988029535'
	}
];
export const whatsappImage = {
	name: 'logotipo_whatsapp_512x512.png',
	alternativeText: '',
	width: 512,
	height: 512,
	formats: {
		thumbnail: {
			name: 'thumbnail_logotipo_whatsapp_512x512.png',
			ext: '.png',
			mime: 'image/png',
			width: 156,
			height: 156,
			size: 22.49,
			url: `${baseUrl}/images/thumbnail_logotipo_whatsapp_512x512.png`
		},
		small: {
			name: 'small_logotipo_whatsapp_512x512.png',
			ext: '.png',
			mime: 'image/png',
			width: 500,
			height: 500,
			size: 133.73,
			url: `${baseUrl}/images/small_logotipo_whatsapp_512x512.png`
		}
	}
};
export const whatsappMsg =
	'Olá, visitei o site da Bragheto Paletes e gostaria de mais informações...';
