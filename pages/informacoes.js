import dynamic from 'next/dynamic';
import { baseUrl } from '@/lib/global';
const Seo = dynamic(() => import('/components/elements/seo'));
const FeatureRowsGroup = dynamic(() =>
	import('/components/sections/feature-rows-group')
);

const Container = dynamic(() => import('/components/elements/main-container'));

const slug = 'informacoes';
const data = {
	features: [
		{
			joinNextRow: false,
			title: 'Em construção',
			description:
				'Em breve traremos aqui muitas informações técnicas sobre diversos modelos de paletes, estrados e embalagens. Além disso você saberá mais sobre como funciona o tratamento para exportação e suas implicações. Aguarde...',
			link: null,
			media: {
				name: 'site-building.jpeg',
				alternativeText:
					'Placa com a informação de que o site está sendo construido.',
				width: 1366,
				height: 768
			},
			icon: null
		}
	]
};
const metadata = {
	twitterCardType: 'summary_large_image',
	metaTitle: 'Informações Bragheto Paletes',
	metaDescription:
		'A BRAGHETO PALETES Fabrica Paletes, Estrados e Embalagens de Madeira para Transporte Interno e EXPORTAÇÃO há 25 anos.',
	shareImage: {
		name: 'logomarca-bragheto.webp',
		alternativeText: 'Logomarca Bragheto',
		size: 38.52,
		width: 575,
		height: 424,
		url: `${baseUrl}/images/logomarca-bragheto.webp`
	}
};

export default () => (
	<>
		{/* Add meta tags for SEO*/}
		<Seo metadata={metadata} />
		{/* Display content sections */}
		<Container slug={slug}>
			<div className="flex flex-col">
				<FeatureRowsGroup data={data} slug={slug} />
			</div>
		</Container>
	</>
);
