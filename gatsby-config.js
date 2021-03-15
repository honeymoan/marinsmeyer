module.exports = {
  siteMetadata: {
    title: "Marins & Meyer - Sociedade de Advogados",
    siteUrl: 'https://www.example.com',
  },
  plugins: [
    "gatsby-plugin-theme-ui",
    {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId: "UA-124593260-1",
      },
    },
    "gatsby-plugin-sharp",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/images/icon.png",
      },
    },
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    {
      resolve: 'gatsby-plugin-i18n',
      options: {        
        langKeyDefault: 'pt',
        useLangKeyLayout: false,
        prefixDefault: false
      }
    }
  ],
};
