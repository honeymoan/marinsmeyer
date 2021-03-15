module.exports = {
  siteMetadata: {
    title: "Marins & Meyer - Sociedade de Advogados",
    siteUrl: 'https://www.marinsemeyer.com.br',
  },
  plugins: [
    "gatsby-plugin-sass",
    "gatsby-plugin-sharp",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId: "UA-124593260-1",
      },
    },
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/images/icon.png",
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    }
  ],
};
