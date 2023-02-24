const getAllProjects = collection => {
  return collection
      .getFilteredByGlob('./src/projects/*.md')
      .reverse()
}

const getPromotedProjects = collection => {
  return collection
      .getFilteredByGlob('./src/projects/*.md')
      .filter(item => item.data.promoted)
}

module.exports = {
  getAllProjects,
  getPromotedProjects
}