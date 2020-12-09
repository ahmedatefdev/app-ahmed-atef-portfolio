const withPWA = require("next-pwa");

module.exports = withPWA({
  pwa: {
    dest: "public"
  },
  publicRuntimeConfig: {
    API_URL: process.env.API_URL,
    MAIL_HOST_URL: process.env.MAIL_HOST_URL,
    RESUME_URL_ENGLISH: process.env.RESUME_URL_ENGLISH,
    RESUME_URL_ARABIC: process.env.RESUME_URL_ARABIC
  },
  webpack: function (config) {
    config.module.rules.push({
      test: /\.(eot|woff|woff2|ttf|svg|png|jpg|gif)$/,
      use: {
        loader: "url-loader",
        options: {
          limit: 100000,
          name: "[name].[ext]"
        }
      }
    });
    return config;
  }
});
