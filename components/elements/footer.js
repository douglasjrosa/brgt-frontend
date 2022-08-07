import Image from './image';
import CustomLink from './custom-link';
import { footer } from 'data/global';

const Footer = () => {
	return (
		<footer className="bg-brgt-forest bg-fixed bg-cover bg-top relative">
			<div
				id="main-footer"
				className="grid bg-black bg-opacity-60 grid-cols md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 p-12"
			>
				{footer.columns.map((footerColumn, index) => (
					<div
						key={`footerKey${index}`}
						className="col mt-10 lg:mt-0 bg-black bg-opacity-90 rounded p-4 border border-2 border-yellow-500"
					>
						<p className="uppercase tracking-wide font-semibold  text-white">
							{footerColumn.title}
						</p>
						<ul className="mt-2 px-5">
							{footerColumn.links &&
								footerColumn.links.map((link, linkIndex) => (
									<li
										key={`footerLinkKey${linkIndex}`}
										className="py-3 lg:py-2 text-2xl lg:text-xl mx-1 my-4 text-yellow-300 hover:text-yellow-100"
									>
										<CustomLink link={link}>
											{link.text}
										</CustomLink>
									</li>
								))}
							{footerColumn.descriptions &&
								footerColumn.descriptions.map(
									(desc, descIndex) => (
										<li
											key={`footerLinkKey${descIndex}`}
											className="py-3 lg:py-2 text-2xl lg:text-xl mx-1 my-4 text-yellow-300"
										>
											{desc}
										</li>
									)
								)}
						</ul>
					</div>
				))}
				<div key="ht">
					<div className="rounded p-6 bg-black bg-opacity-90 border border-2 border-yellow-500 h-auto w-auto text-center">
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
				className="text-sm bg-black py-6 text-yellow-200"
			>
				<div className="container">{footer.smallText}</div>
			</div>
		</footer>
	);
};

export default Footer;
