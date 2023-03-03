module.exports = {
  projects_es: (collection) => {
    return collection
      .getFilteredByGlob('./src/es/projects/**/*.md')
      .filter(item => !item.data.draft)
      .reverse()
  },
  projects_en: (collection) => {
    return collection
      .getFilteredByGlob('./src/en/projects/**/*.md')
      .filter(item => !item.data.draft)
      .reverse()
  },
  promotedProjects_es: (collection) => {
    return collection
        .getFilteredByGlob('./src/es/projects/**/*.md')
        .filter(item => item.data.promoted)
  },
  promotedProjects_en: (collection) => {
    return collection
        .getFilteredByGlob('./src/en/projects/**/*.md')
        .filter(item => item.data.promoted)
  }
}