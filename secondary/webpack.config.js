const path = require('path');

module.exports = {
    context: path.join(__dirname, 'src'),
    entry: {
        secondary: './secondary.js',
    },
    output: {
        path: path.join(__dirname, '..', 'public', 'assets'),
        publicPath: '/assets/',
        filename: 'js/[name].js',
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                include: path.join(__dirname, 'src'),
            },
        ]
    },
};
