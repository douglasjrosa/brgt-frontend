const Container = ({ children, slug }) => {
	const mainPages = ['', 'empresa', 'produtos', 'info', 'contato'];
	const theme = mainPages.includes(slug)
		? 'bg-brgt-paletes bg-fixed bg-cover py-36'
		: 'bg-brgt-repeat bg-repeat py-36 bg-[length:70px_70px]';

	return (
		<div id="main-container" className={theme}>
			{children}
		</div>
	);
};
export default Container;
