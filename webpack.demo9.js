const HtmlWebpackPlugin = require('html-webpack-plugin'); //installed via npm
const webpack = require('webpack'); //to access built-in plugins

module.exports = {
  entry:"./src/demo9.js",
  module: {
    rules: [
      { test: /\.txt$/, use: 'raw-loader' },
      {
        test: require.resolve('./src/globals.js'),
        use:
          'exports-loader?type=commonjs&exports=file,multiple helpers.parse parse',
      },
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({template: './src/index.html'}),
    // new webpack.ProvidePlugin({
    //     _: 'lodash',
    //   }),
  ]
};
