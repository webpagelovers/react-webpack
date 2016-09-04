module.exports = {
    entry: {
        dropDown:['./compants/dropDown.jsx'],
        navTab:['./compants/navTab.jsx'],
        allCompants:['./compants/allCompants.jsx']
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