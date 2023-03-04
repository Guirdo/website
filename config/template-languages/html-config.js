const htmlmin = require('html-minifier-terser')

module.exports = (eleventyConfig) => {
  eleventyConfig.addTransform('html-minify', (content, path) => {
    if (path && path.endsWith('.html')) {
      return htmlmin.minify(content, {
        collapseBooleanAttributes: true,
        collapseWhitespace: true,
        decodeEntities: true,
        includeAutoGeneratedTags: false,
        removeComments: true
      });
    }
    return content;
  });
}