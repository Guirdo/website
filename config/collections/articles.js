module.exports = {
  articles_es: (collection) => {
    return collection
      .getFilteredByGlob('./src/es/articles/**/*.md')
      .filter(item => !item.data.draft)
      .reverse()
  },
  articles_en: (collection) => {
    return collection
      .getFilteredByGlob('./src/en/articles/**/*.md')
      .filter(item => !item.data.draft)
      .reverse()
  },
}