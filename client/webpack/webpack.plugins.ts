import HtmlWebpackPlugin from 'html-webpack-plugin';
import CopyWebpackPlugin from 'copy-webpack-plugin';
import { BaseHrefWebpackPlugin } from 'base-href-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import Dotenv from 'dotenv-webpack';

export const getPlugins = (mode: boolean) => {
    const plugins = [
        new Dotenv({
            path: mode ? '/enviroment/prod.env' : '/enviroment/dev.env',
            silent: false,
        }),
        new HtmlWebpackPlugin({
            title: 'React App',
            template: './src/index.html',
            hash: true,
        }),
        new BaseHrefWebpackPlugin({
            baseHref: '/'
        }),
        new CopyWebpackPlugin([{
            from: './src/assets',
            to: './build/[name].[ext]'
        },
        {
            from: './src/favicon.ico',
            to: './favicon.ico'
        }
        ]),
        new MiniCssExtractPlugin({
            filename: '[name].[hash].css',
            chunkFilename: '[id].css',
        })
    ];
    return plugins;
};