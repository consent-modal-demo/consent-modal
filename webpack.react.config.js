const path = require('path');
const { version } = require('./package.json');

module.exports = {
  entry: {
    'consent-modal': './index-react.jsx'
  },

  output: {
    path: path.join(process.cwd(), 'dist'),
    filename: `[name]-react-${version}-min.js`,
    library: 'ConsentModal',
    libraryTarget: 'window'
  },

  mode: 'production',

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
