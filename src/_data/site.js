const eleventyPackage = require('@11ty/eleventy/package.json')

module.exports = function () {
  return {
    url: process.env.SITE_URL || 'https://localhost:8080',
    name: 'Seb Méndez',
    domain:'guirdo.xyz',
    generator: `${eleventyPackage.name} v${eleventyPackage.version}`,
    author: {
      name: 'Seb Méndez',
      mastodonLink: 'https://mstdn.mx/@guirdo',
      twitterHandle: '@guirdo21'
    },
    defaultFeaturedImage: '#'
  }
}