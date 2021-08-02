module.exports = {
  permalink: ({ page }) => {
    const { filePathStem, fileSlug } = page
    return (fileSlug ? fileSlug : filePathStem) +'.html'
  }
}