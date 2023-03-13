const glob = require('fast-glob')
const {EleventyI18nPlugin} = require('@11ty/eleventy');
const i18n = require('eleventy-plugin-i18n')
const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");
const pluginRss = require("@11ty/eleventy-plugin-rss");
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

  /* -------- Plugins --------  */
  glob.sync('./config/template-languages/*.js').forEach((file) => {
    let plugin = require('./' + file)
    eleventyConfig.addPlugin(plugin)
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

  eleventyConfig.addPlugin(syntaxHighlight);
  eleventyConfig.addPlugin(pluginRss);

  eleventyConfig.addWatchTarget('./src/assets');
  
  eleventyConfig.addPassthroughCopy('src/assets/fonts/')
  eleventyConfig.addPassthroughCopy({
    './src/assets/images/favicon/*': '/'
  });

  return {
    dir: {
      input: 'src',
      output: '_site',
      includes: '_includes',
      layouts: '_layouts'
    },
    markdownTemplateEngine: 'njk',
    htmlTemplateEngine: 'njk',
  }
};