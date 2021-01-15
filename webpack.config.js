const path = require('path');

const SRC = path.join(__dirname, './client/index.jsx');
const PUBLIC = path.join(__dirname, '/public');

module.exports = {
  mode: 'development',
  entry: SRC,
  output: {
    filename: 'bundle.js',
    path: `${PUBLIC}`,
  },
  module: {
    rules: [
      {
        test: /\.jsx?/,
        include: SRC,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
    ],
  },
};
