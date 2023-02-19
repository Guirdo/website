module.exports = function (eleventyConfig) {
  eleventyConfig.addPlugin(require('./config/template-languages/css-config.js'));

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