const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    'test-jig': './test-jig.jsx'
  },

  output: {
    path: path.join(process.cwd(), 'dist-test-jig'),
    filename: 'bundle.[name].[hash].js'
  },

  mode: 'development',

  plugins: [
    new HtmlWebpackPlugin({
      template: './index-test-jig.html',
      chunk: ['test-jig']
    })
  ],
  module: {
    rules: [
      {
        test: /.+\.jsx?$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react']
          }
        }
      }
    ]
  }
};
