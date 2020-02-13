const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin=require('copy-webpack-plugin');

const config = {
    entry: './index.js',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, '../build'),
    },
    context: path.resolve(__dirname, '../src'),

    plugins: [
        new CopyWebpackPlugin( [
                                 {
                                   from: '../src/assets/img', to: '../build/assets/img',
                                 },
                                 {
                                   from: '../src/data', to: '../build/data',
                                 },
                                 {
                                    from: '../src/assets/css', to: '../build/assets/css',
                                 },
                                 {
                                    from: '../src/assets/js', to: '../build/assets/js',
                                 },
                                 {
                                    from: '../src/assets/fonts', to: '../build/assets/fonts',
                                 },
                               ] ),
//        new MiniCssExtractPlugin( ),

        new HtmlWebpackPlugin( {
                                 template: 'index.html',
                                 meta: {
                                   viewport: 'width=device-width, initial-scale=1',
                                 }
                               } )
      ],

    module:{
        rules: [
        {
            test: /\.css$/,
            use: [

            'style-loader',

            'css-loader',


            ],
        },
        {
                     test: /\.(png|svg|jpg|gif)$/,
                     use: [
                       'file-loader',
                     ],
        },
        {
                  test: /\.(woff|woff2|eot|ttf|otf)$/,
                  use: [
                    'file-loader',
                  ],
         },
         {
                 test: /\.(csv|tsv)$/,
                 use: [
                  'csv-loader',
                  ],
                },
                {
                  test: /\.xml$/,
                  use: [
                    'xml-loader',
                  ],
                },
        ],
    },
};

module.exports = config;