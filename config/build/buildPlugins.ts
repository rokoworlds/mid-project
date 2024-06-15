import { Configuration } from "webpack";
import { BuildOptions } from "./types/types";
import HtmlWebpackPlugin from "html-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import ESLintPlugin from 'eslint-webpack-plugin';

export function buildPlugins(options: BuildOptions): Configuration['plugins'] {
    return [
        new HtmlWebpackPlugin({template: options.paths.html}),
        new MiniCssExtractPlugin({
          filename: 'css/[name].[contenthash].css',
          chunkFilename: 'css/[name].[contenthash].css',
        }),
        new ESLintPlugin()
    ]
}