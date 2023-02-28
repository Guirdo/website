module.exports = {
  projects: (collection) => {
    return collection
      .getFilteredByGlob('./src/projects/**/*.md')
      .filter(item => !item.data.draft)
      .reverse()
  },
  promotedProjects: (collection) => {
    return collection
        .getFilteredByGlob('./src/projects/**/*.md')
        .filter(item => item.data.promoted)
  }
}