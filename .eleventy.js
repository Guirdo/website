const glob = require('fast-glob')

module.exports = function (eleventyConfig) {
  /* -------- Collection --------  */
  glob.sync('./config/collections/*.js').forEach((file) => {
    let collection = require('./' + file);
    Object.keys(collection).forEach((name) => {
      eleventyConfig.addCollection(name, collection[name]);
    });
  });

  /* -------- Filters --------  */
  glob.sync('./config/filters/*.js').forEach((file) => {
    let filters = require('./' + file);
    Object.keys(filters).forEach((name) => {
      eleventyConfig.addFilter(name, filters[name]);
    });
  });

  eleventyConfig.addPlugin(require('./config/template-languages/css-config.js'))
  eleventyConfig.addPlugin(require('./config/template-languages/js-config.js'))

  eleventyConfig.addWatchTarget('./src/assets');
  
  eleventyConfig.addPassthroughCopy('src/assets/fonts/')
  eleventyConfig.addPassthroughCopy({
    './src/assets/images/favicon/*': '/'
  });

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