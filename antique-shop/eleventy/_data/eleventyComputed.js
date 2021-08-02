module.exports = {
  permalink: ({ page }) => {
    const { filePathStem } = page
    return filePathStem +'.html'
  }
}