var webpack = require("webpack")
var path = require("path")

process.noDeprecation = true

module.exports = env => {
    const no_dist = (env && env.dist === "false");

return {
  mode: "production"
  entry: "./src/index.js",
  output: {
      path: '/Users/bagsihyeon/Documents/GitHub/learning-react/chapter-05/recipe_study/dist/assets',
      filename: "bundle.js",
      sourceMapFilename: 'bundle.map'
  },
  devtool: '#source-map',
  module: {
      rules: [
          {
              test: /\.js$/,
              exclude: /(node_modules)/,
              loader: 'babel-loader',
              query: {
                  presets: ['env', 'stage-0', 'react']
              }
          },
          {
              test: /\.css$/,
              use: ['style-loader','css-loader', {
                  loader: 'postcss-loader',
                  options: {
                    plugins: () => [require('autoprefixer')]
                  }}]
          }
      ]
  },
  plugins: [

      new webpack.DefinePlugin({
          "process.env": {
              NODE_ENV: JSON.stringify("production")
          }
      }),

      new webpack.optimize.UglifyJsPlugin({
          sourceMap: true,
          warnings: false,
          mangle: false
      })
  ]
}
