import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin'
import webpack from 'webpack';
import type { Configuration as DevServerConfiguration } from "webpack-dev-server";

export default (env: any) => {
  const config: webpack.Configuration = {  
        mode: env.mode ?? 'development',
        entry: path.resolve(__dirname, 'src', 'index.tsx'),
        output: {
            filename: '[name].[contenthash].js',
            path: path.resolve(__dirname, 'dist'),
            clean: true
        },
        devServer: {
          static: './dist',
        },
        plugins: [
            new HtmlWebpackPlugin({template: path.resolve(__dirname, 'public', 'index.html')})
        ],
        module: {
            rules: [
              {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
              },
            ],
          },
        resolve: {
          extensions: ['.tsx', '.ts', '.js'],
        },
        optimization: {
          runtimeChunk: 'single',
        },
    }

    return config;
};