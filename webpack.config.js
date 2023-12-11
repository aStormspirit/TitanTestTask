const path = require('path');

module.exports = {
  entry: './src/ts/main.ts',
  mode: 'development', // 'production
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'src/js'),
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  watch: true
};