const path = require('path');

module.exports = {
  entry: {
    'consent-modal': './index.js'
  },

  output: {
    path: path.join(process.cwd(), 'dist'),
    filename: 'bundle.[name].[hash].js',
    library: 'consentModal'
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
