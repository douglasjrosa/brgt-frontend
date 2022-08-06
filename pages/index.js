import Sections from '@/components/sections';
import Seo from '@/components/elements/seo';
import { useRouter } from 'next/router';
import Loading from '@/components/elements/loading';

export default () => {
	const { isFallback } = useRouter();
	if (isFallback ) return <Loading />;
	
	const { slug, metadata, contentSections } = require("../data/pages/index.js");
	
	return (
		<>
			{/* Add meta tags for SEO*/}
			<Seo metadata={metadata} />
			{/* Display content sections */}
			<Sections sections={contentSections} slug={slug} />
		</>
	);
};
