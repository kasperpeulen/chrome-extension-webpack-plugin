module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "index.js",
    libraryTarget: 'umd'
  },
  module: {
    loaders: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel'
    }]
  }
};