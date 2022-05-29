module.exports = {
  siteMetadata: {
    siteUrl: "https://www.atem.io/",
    title: "peet.sh // philip poloczek",
  },
  plugins: [
    "gatsby-plugin-styled-components",
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography.js`,
      },
    },
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/images/icon.png",
      },
    },
    "gatsby-plugin-mdx",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: `gatsby-source-notion-api`,
      options: {
        token: `secret_l9H4WCZcf82rCJc8cvJg7oaVuDEgd0bLrkZDGvsKgIN`,
        databaseId: `7d0e0e2b7d484c68b7511fa9ba9ae108`,
        propsToFrontmatter: true,
        lowerTitleLevel: true,
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: "./src/pages/",
      },
      __key: "pages",
    },
  ],
};
