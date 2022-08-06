import Sections from '@/components/sections';
import Seo from '@/components/elements/seo';
import { useRouter } from 'next/router';
import Loading from '@/components/elements/loading';
import dynamic from 'next/dynamic';
import { Suspense } from 'react';

export default () => {
	const { asPath, isFallback } = useRouter();
	if (isFallback || asPath === '/[slug]') return null;
	const route = asPath === '/' ? '/index.js' : asPath;

	const Page = dynamic(
		() => import('../data/pages' + route),
		{ ssr: true }
	);

	console.log(Page);
	
	return (
		<>
			<Page />
		</>
	);
};


