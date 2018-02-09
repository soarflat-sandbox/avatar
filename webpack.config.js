const path = require('path');

module.exports = {
  entry: {
    'index': './src/index'
  },

  output: {
    filename: '[name].js',
    path: path.join(__dirname, 'docs'),
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      }
    ]
  },

  resolve: {
    alias: {
      'vue': 'vue/dist/vue.min.js',
    }
  },
};

if (process.env.NODE_ENV === 'production') {
  module.exports.plugins = [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"',
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        drop_console: true
      },
    }),
  ]
} else {
  module.exports.devtool = '#source-map';
}
