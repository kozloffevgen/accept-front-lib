const webpackDev = (pathDir) => {
  return {
    open: true,
    hot: true,
    static: {
      directory: `${pathDir}\\App`,
    },
    port: 8100,
  }
}

module.exports = webpackDev;