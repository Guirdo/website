const { getAllProjects, getPromotedProjects } = require('./config/collections/projects.js');

module.exports = function (eleventyConfig) {
  eleventyConfig.addWatchTarget('./src/assets');

  eleventyConfig.addCollection('projects', getAllProjects)
  eleventyConfig.addCollection('promotedProjects', getPromotedProjects)
  
  eleventyConfig.addPlugin(require('./config/template-languages/css-config.js'))
  eleventyConfig.addPlugin(require('./config/template-languages/js-config.js'))

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