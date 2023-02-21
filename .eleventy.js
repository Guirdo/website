module.exports = function (eleventyConfig) {
  eleventyConfig.addWatchTarget('./src/assets');
  
  eleventyConfig.addPlugin(require('./config/template-languages/css-config.js'));

  eleventyConfig.addPassthroughCopy('src/assets/fonts/')

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