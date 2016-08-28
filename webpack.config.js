module.exports = {
    entry: {
        index: './compants/index.jsx'
    },
    output: {
        path: './dist/',
        filename: '[name].bundle.js'
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    module: {
        loaders: [
            { test: /\.jsx$/, loaders: ['jsx?harmony'] }
        ]
    }
}