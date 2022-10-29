import dynamic from 'next/dynamic';
import { baseUrl } from '@/lib/global';
const Seo = dynamic(() => import('/components/elements/seo'));
const FeatureRowsGroup = dynamic(() =>
	import('/components/sections/feature-rows-group')
);

const Container = dynamic(() => import('/components/elements/main-container'));

const slug = '';
const data = {
	features: [
		{
			joinNextRow: false,
			title: 'Fábricando Paletes Há 25 Anos',
			description:
				'A Bragheto Paletes já nasceu com a vocação de se focar na fabricação de paletes de medidas especiais para suprir as necessidades das indústrias locais em Ribeirão Preto SP',
			link: null,
			media: {
				name: 'paletes-2.jpg',
				alternativeText:
					'Galpão de porta-paletes com uma empilhadeira movimentando as mercadorias com paletes.',
				width: 1000,
				height: 750
			},
			icon: null
		},
		{
			joinNextRow: false,
			title: 'Produzimos Paletes Padrão e Especiais',
			description:
				'Além das medidas padrão 1,20m x 1,00m que são os mais usados, também produzimos paletes e estrados especiais conforme a sua necessidade.',
			link: null,
			media: {
				name: 'palete-especial-1.jpg',
				alternativeText:
					'Palete tipo estrado de madeira com vigas. Muito reforçado.',
				width: 2500,
				height: 1875
			},
			icon: null
		},
		{
			joinNextRow: false,
			title: 'Entre em contato para pedir um orçamento',
			description:
				'Temos paletes de diversos modelos, alguns a pronta entrega. Se a sua empresa precisa de paletes novos com prazo de entrega pontual, fale com a gente, pois esse é a nossa melhor qualidade.',
			link: null,
			media: {
				name: 'executive-calling-2.jpg',
				alternativeText:
					'Mulher falando ao telefone.',
				width: 940,
				height: 788
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
