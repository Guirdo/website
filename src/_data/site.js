const eleventyPackage = require('@11ty/eleventy/package.json')

module.exports = function () {
  return {
    url: process.env.SITE_URL || 'https://localhost:8080',
    name: 'Seb Méndez',
    domain:'guirdo.xyz',
    author: {
      name: 'Seb Méndez',
      mastodonLink: 'https://mstdn.mx/@guirdo',
      twitterHandle: '@guirdo21'
    },
    defaultFeaturedImage: 'https://res.cloudinary.com/dyuo7wfyi/image/upload/v1677961000/website/og_image_hwkr2m.webp'
  }
}