const path = require('path');

module.exports = {
    entry: "./src/demo6.js",
    output: {
        filename: 'my-first-webpack.bundle.js'
    },
    module: {
        rules: [
            { test: /\.txt$/, use: 'raw-loader' }
        ]
    }
};