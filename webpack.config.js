const UglifyJsPlugin = require('uglifyjs-webpack-plugin')

module.exports = {
    devtool: 'cheap-eval-source-map',
    entry:'./src/app.js',
    output: {
        filename: 'bundle.js'
    },

    module: {
        rules: [
            { 
                test: /\.txt$/, 
                use: 'babel-loader',
                exclude: '/node_modules/',
            }
        ],
        
    },

    plugins: [

        new UglifyJsPlugin({
            sourceMap: true
        })
        
        
    ]


};
