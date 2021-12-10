const path = require('path');
const { version } = require('./package.json');

module.exports = {
  entry: {
    'consent-modal': './index.js'
  },

  output: {
    path: path.join(process.cwd(), 'dist'),
    filename: `[name]-${version}-min.js`,
    library: 'ConsentModal',
    libraryTarget: 'window'
  },

  mode: 'production',

  module: {
    rules: [
      {
        test: /.+\.js$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      }
    ]
  }
};
