const { colors } = require(`tailwindcss/defaultTheme`);

module.exports = {
	content: ['./components/**/*.js', './pages/**/*.js'],
	theme: {
		extend: {
			colors: {
				primary: colors.indigo
			},
			container: {
				center: true,
				padding: {
					DEFAULT: '1rem',
					md: '2rem'
				}
			},
			backgroundImage: (theme) => ({
				'brgt-wood': "url('/images/wood-min.webp')",
				'brgt-repeat': "url('/images/paletes-repeat.webp')",
				'brgt-paletes': "url('/images/paletes-0.webp')"
			})
		},
		screens: {
			sm: '640px',
			md: '768px',
			lg: '1024px',
			xl: '1280px'
		}
	},
	plugins: [require('@tailwindcss/typography')]
};
