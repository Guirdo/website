const glob = require('fast-glob')
const {EleventyI18nPlugin} = require('@11ty/eleventy');
const i18n = require('eleventy-plugin-i18n')
const translations = require('./src/_data/i18n')

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

  eleventyConfig.addPlugin(EleventyI18nPlugin, {
    defaultLanguage: 'es'
  });
  
  eleventyConfig.addPlugin(i18n, {
    translations,
    fallbackLocales: {
      '*': 'es'
    }
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