var webpack=require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
function resolve (dir) {
    return path.join(__dirname, '..', dir)
}

module.exports = {
    entry:{
        drawjs:["./src/index.js"],
        // main:["./src/Test/meshPlots.js"]
        // main:["./src/Test/lineChart.js"]
    },

    output: {
        path: path.resolve(__dirname,'dist'),
        filename: "[name][hash].js",
        // library:'D2'
    },

    devtool: 'inline-source-map',

    devServer: {
        contentBase: './dist',
        hot: true
    },

    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.js$/,
                use:[
                    'babel-loader'
                ],
                include: [resolve('src')]

            },
            {
                test: /\.(png|jpe?g|gif|ico)(\?\S*)?$/,
                loader: 'file-loader',
            }
        ]
    },

    externals: {
        jquery: 'jQuery'
    },

    plugins:[
        new webpack.BannerPlugin('Draw2.js'),
        new HtmlWebpackPlugin({
            title: 'Draw2.js',
            template: path.join(__dirname,'template/index.html')
        }),
        new CleanWebpackPlugin(['dist']),
        new webpack.HotModuleReplacementPlugin()
    ]

}