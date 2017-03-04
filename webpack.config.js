const path = require('path')
const merge = require('webpack-merge')

module.exports = (config, { cwd, env }, webpack) => {

  const customConfig = {
    resolve: {
      alias: {
        tokens: path.resolve(cwd, 'style/tokens/index.js')
      }
    }
  }

  return merge(customConfig, config)
}
