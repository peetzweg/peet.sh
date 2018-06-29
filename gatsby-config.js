module.exports = {
	// pathPrefix: '/atem.io', // NOT needed because I'm hosting it on a TLD
	siteMetadata: {
		title: 'Gatsby Default Starter'
	},
	plugins: [
		{
			resolve: `gatsby-plugin-typography`,
			options: {
				pathToConfigModule: `src/utils/typography.js`
			}
		},
		'gatsby-plugin-react-helmet',
		{
			resolve: `gatsby-plugin-favicon`,
			options: {
				logo: './src/favicon.png',
				injectHTML: true,
				icons: {
					android: true,
					appleIcon: true,
					appleStartup: true,
					coast: false,
					favicons: true,
					firefox: true,
					twitter: false,
					yandex: false,
					windows: false
				}
			}
		},
		{
			resolve: `gatsby-plugin-create-client-paths`,
			options: { prefixes: [ `/live/*` ] }
		}
	]
};
