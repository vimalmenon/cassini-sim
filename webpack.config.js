const path = require("path");
const webpack  = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    mode: "development",
    devtool: "source-map",
    entry: {
        main : path.resolve(__dirname, "./scripts/index.tsx")
    },
    devServer: {
        publicPath: '/',
        contentBase: path.resolve(__dirname, "/public"),
        inline: true,
        port: 8080,
        historyApiFallback: true,
        watchOptions: {
            poll: true
        },
        headers: {
            'Access-Control-Allow-Origin': '*'
        },
        proxy: {
            '/api': {
                 target: {
                    host: "0.0.0.0",
                    protocol: 'http:',
                    port: 8081
                },
                pathRewrite: {
                    '^/api': '/api'
                }
            }
        }
    },
    module: {
        rules: [
            {
                test: /\.ts(x?)$/,
                enforce: 'pre',
                use: [
                  {
                    options: {
                      eslintPath: require.resolve('eslint'),
            
                    },
                    loader: require.resolve('eslint-loader'),
                  },
                ],
                exclude: /node_modules/,
            },
            {
                test: /\.scss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'sass-loader'
                ]
            },
            {
                test: /\.ts(x?)$/,
                exclude: /node_modules/,
                use: [
                    { 
                        loader: 'babel-loader'
                    },
                    {
                        loader: "ts-loader",
                    }
                ]
            },
            {
                enforce: "pre",
                test: /\.ts(x?)$/,
                loader: "source-map-loader"
            }
            
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({            
            filename: '[name].css',
            chunkFilename: '[id].css'
        }),
        new HtmlWebpackPlugin({
            title: "Application Title",
            hash: false,
            filename : './index.html',
            template: './index.html',
            inject: true,
        }),
    ],
    resolve: {
        extensions: [".ts", ".tsx", ".js", ".scss"],
        modules: ["scripts", "node_modules"],
        alias : {
        }
    }
}