// const path = require('path');

// const SRC = path.join(__dirname, './client/index.jsx');
// const PUBLIC = path.join(__dirname, 'public');

// module.exports = {
//   mode: 'development',
//   entry: SRC,
//   output: {
//     filename: 'bundle.js',
//     path: `${PUBLIC}`,
//   },
//   module: {
//     rules: [
//       {
//         test: /\.jsx$/,
//         include: SRC,
//         exclude: /node_modules/,
//         loader: 'babel-loader',
//       },
//     ],
//   },
// };

const path = require('path');

const SRC_DIR = path.join(__dirname, 'client');
const OUT_DIR = path.join(__dirname, 'public');

module.exports = {
  entry: path.join(SRC_DIR, 'index.jsx'),
  output: {
    path: OUT_DIR,
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
    ],
  },
  mode: 'development',
  resolve: {
    extensions: ['.js', '.jsx'],
  },
};
