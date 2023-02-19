module.exports = function (eleventyConfig) {
  eleventyConfig.addWatchTarget('src/css/')

  eleventyConfig.addPassthroughCopy('src/css/')
  return {
    dir: {
      markdownTemplateEngine: 'njk',
      htmlTemplateEngine: 'njk',
      dataTemplateEngine: 'njk',

      input: 'src',
      output: '_site',
      includes: '_includes',
      layouts: '_layouts'
    }
  }
};