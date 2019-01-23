const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = () => ({
 module: {
  rules: [
    {
      test: /\.(js|jsx)$/,
      exclude: /node_modules/,
      use: ['babel-loader'],
    },
    {
      test: /\.css$/,
      use: ['style-loader', 'css-loader'],
    }
  ]

 },
 resolve: {
   extensions: ['*', '.js', '.jsx'],
   alias: {
    '@Components': path.resolve(__dirname, './src/components'),
    '@Containers': path.resolve(__dirname, './src/containers'),
    '@Services': path.resolve(__dirname, './src/services'),
    '@Store': path.resolve(__dirname, './src/store'),
    '@Styles': path.resolve(__dirname, './src/styles'),
    '@Utils': path.resolve(__dirname, './src/utils'),
   },
 },
 plugins: [
   new HtmlWebpackPlugin({
     template: './src/index.html',
   })
 ],
});
