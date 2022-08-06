import Image from './image';
import CustomLink from './custom-link';
import { footer } from 'data/global';

const Footer = () => {
	return (
		<footer className="bg-emerald-600 relative">
			<div
				id="main-footer"
				className="grid grid-cols md:grid-cols-3 bg-black bg-opacity-70 lg:grid-cols-4 xl:grid-cols-5 gap-4 p-12"
			>
				{footer.columns.map((footerColumn, index) => (
					<div
						key={`footerKey${index}`}
						className="col mt-10 lg:mt-0"
					>
						<p className="uppercase tracking-wide font-semibold  text-white">
							{footerColumn.title}
						</p>
						<ul className="mt-2 px-5">
							{footerColumn.links.map((link, linkIndex) => (
								<li
									key={`footerLinkKey${linkIndex}`}
									className="py-3 lg:py-2 text-2xl lg:text-xl mx-1 text-green-200 hover:text-green-400"
								>
									<CustomLink link={link}>
										{link.text}
									</CustomLink>
								</li>
							))}
						</ul>
					</div>
				))}
				<div key="ht">
					<div className="rounded p-6 h-auto w-auto text-center bg-white">
						{footer.logo && (
							<Image
								media={footer.logo}
								className="bg-opacity-75 object-contain"
								width="200"
								height="105"
							/>
						)}
					</div>
				</div>
			</div>
			<div
				id="small-text"
				className="text-sm bg-black bg-opacity-90 py-6 text-green-400"
			>
				<div className="container">{footer.smallText}</div>
			</div>
		</footer>
	);
};

export default Footer;
