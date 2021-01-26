const HtmlWebpackPlugin = require('html-webpack-plugin'); //installed via npm
const webpack = require('webpack'); //to access built-in plugins
const path=require('path');

module.exports = {
    entry: {
        polyfills: "./src/polyfills.js",
        "demo9": "./src/demo10.js"
    },
    output: {
        filename: "[name].bundle.js",
        path: path.resolve(__dirname, 'dist'),
    },
    module: {
        rules: [
            {
                test: require.resolve('./src/index.js'),
                use: 'imports-loader?wrapper=window',
            },
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({ template: './src/index.html' }),
        // new webpack.ProvidePlugin({
        //     _: 'lodash',
        //   }),
    ]
};
