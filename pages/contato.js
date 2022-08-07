import dynamic from 'next/dynamic';
import { baseUrl } from '@/lib/global';
const Seo = dynamic(() => import('/components/elements/seo'));
const FeatureRowsGroup = dynamic(() =>
	import('/components/sections/feature-rows-group')
);

const Container = dynamic(() => import('/components/elements/main-container'));

const slug = 'contato';
const data = {
	features: [
		{
			joinNextRow: false,
			title: 'Entre em contato para pedir um orçamento',
			description:
				'Ligue agora para **[(16) 3628-4114](tel:+551636284114)** e peça um orçamento.  Se preferir envie um e-mail no link abaixo:',
			link: {
				newTab: true,
				url: 'mailto:contato@braghetopaletes.com.br',
				text: 'contato@braghetopaletes.com.br'
			},
			media: {
				name: 'executive-calling.jpg',
				alternativeText:
					'Mulher falando ao telefone.',
				width: 450,
				height: 675
			},
			icon: null
		}
	]
};
const metadata = {
	twitterCardType: 'summary_large_image',
	metaTitle: 'Homepage Bragheto Paletes',
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
