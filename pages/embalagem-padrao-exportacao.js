import dynamic from 'next/dynamic';
import { baseUrl } from '@/lib/global';
const Seo = dynamic(() => import('/components/elements/seo'));
const FeatureRowsGroup = dynamic(() =>
	import('/components/sections/feature-rows-group')
);

const Container = dynamic(() => import('/components/elements/main-container'), {
	suspense: true
});

const slug = 'embalagem-padrao-exportacao';
const data = {
	component: 'feature-rows-group',
	features: [
		{
			joinNextRow: false,
			title: 'Embalagem padrão exportação',
			description:
				'Em dias atuais, há grande interesse das indústrias brasileiras em exportar seus produtos para diversificar seu mercado e dar maior estabilidade ao seu faturamento, além de vantagens tributárias. Para isso, é necessário adaptar muitas vezes características do produto para se adequar ao mercado que irá importá-lo. Como não poderia ser diferente, também a embalagem do produto recebe especial atenção. A pergunta que deve ser respondida é:  \n"Posso dizer que meu produto possui já, uma **embalagem padrão exportação**?"  \nMas o que seria uma embalagem padrão exportação?  \nHá várias situações que podem ocorrer quando se quer exportar um produto, máquina ou equipamento...  \nExistem normas e diretivas, como por exemplo a diretiva ROHS que são restritivas até mesmo ao tipo de tinta usada na impressão da caixa.',
			link: null,
			media: {
				name: 'paletes-1.jpg',
				alternativeText:
					'Bandeira do Brasil com uma seta em direção ao planeta terra e suas bandeiras',
				width: 426,
				height: 132
			},
			icon: null
		}
	]
};
const metadata = {
	twitterCardType: 'summary_large_image',
	metaTitle: 'Embalagem padrão exportação',
	metaDescription:
		'A RIBERMAX é a Fabricante de Embalagem de Madeira que pode te ajudar se você precisa de CAIXA FUMIGADA P/ EXPORTAÇÃO. Desde 1996, o único foco da Ribermax tem sido produzir e inovar no segmento de Paletes, Engradados, Estrados, Caixas e Embalagens de Madeira para Transporte de Equipamentos, Peças e Produtos em Geral.\n',
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
