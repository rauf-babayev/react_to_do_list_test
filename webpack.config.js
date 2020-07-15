const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CssWebpackPlugin = require('mini-css-extract-plugin');

module.exports = {
    entry: path.resolve(__dirname, "./src/index.js"),
    output: {
        path: path.resolve(__dirname, "./build"),
        filename: "index.js"
    },
    devServer: {
        port: 3000,
        contentBase: path.resolve(__dirname, "./build"),
        hot: true,
        open: true,
        watchContentBase: true,
        watchOptions: {
            ignored: /node_modules/
        },
        writeToDisk: filePath => {
            return /(index.html$)|(index.js$)|(style.css$)/.test(filePath)
        }
    },
    optimization: {
        minimize: false,
    },
    module: {
        rules: [
            {test: /\.html$/, use: "html-loader"},
            {test: /\.less$/, use: [CssWebpackPlugin.loader, "css-loader", "less-loader"]},
            {test: /\.jsx?$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react'],
                        plugins: [
                            [
                                '@babel/plugin-proposal-decorators',
                                {
                                    legacy: true,
                                },
                            ],
                            ['@babel/plugin-proposal-class-properties', { loose: true }],
                            '@babel/plugin-syntax-dynamic-import',
                            '@babel/plugin-transform-regenerator',
                            '@babel/plugin-syntax-import-meta',
                            '@babel/plugin-proposal-json-strings',
                            '@babel/plugin-proposal-function-sent',
                            '@babel/plugin-proposal-export-namespace-from',
                            '@babel/plugin-proposal-numeric-separator',
                            '@babel/plugin-proposal-throw-expressions',
                            '@babel/plugin-proposal-export-default-from',
                            '@babel/plugin-proposal-logical-assignment-operators',
                            '@babel/plugin-proposal-optional-chaining',
                            [
                                '@babel/plugin-proposal-pipeline-operator',
                                {
                                    proposal: 'minimal',
                                },
                            ],
                            '@babel/plugin-proposal-nullish-coalescing-operator',
                            '@babel/plugin-proposal-do-expressions',
                            '@babel/plugin-proposal-function-bind',
                            '@babel/plugin-transform-runtime',
                            [
                                'babel-plugin-styled-components',
                                {
                                    pure: true,
                                    fileName: false,
                                    displayName: false,
                                },
                            ],
                        ]
                    }
                }
            },
            {
                test: /\.(jpe?g|png|gif|svg)$/i,
                use: [
                    {
                        loader: "file-loader",
                        options: {
                            name: "[name].[ext]",
                            outputPath: './images',
                        },
                    }
                ]
            }
        ]
    },
    resolve: {
        extensions: ['*', '.js', '.jsx']
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, "./src/index.html"),
            filename: "index.html"
        }),
        new CssWebpackPlugin({
            filename: "style.css"
        })
    ]
}