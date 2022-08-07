const Container = ({ children, slug }) => {
	const mainPages = ['', 'empresa', 'produtos', 'contato'];
	const theme = mainPages.includes(slug)
		? 'bg-brgt-paletes bg-fixed bg-cover py-36'
		: 'bg-brgt-wood py-36  bg-fixed bg-cover';

	return (
		<div id="main-container" className={theme}>
			{children}
		</div>
	);
};
export default Container;
