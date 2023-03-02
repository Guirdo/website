module.exports = {
  lang: 'es',
  permalink: function (data) {
    if (data.slugOverride) {
      return `/${data.lang}/${this.slugify(data.slugOverride)}/`;
    }
  }
};