const path = require('path');

module.exports = {
  mode: 'production',
  entry: path.join(__dirname, 'src/js/index.js'),
  output: {
    filename: 'jquery.my-plugin.min.js',
    path: path.join(__dirname, 'dist/js')
  }
};