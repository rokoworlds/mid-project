import webpack from 'webpack';
import { buildDevServer } from './buildDevServer';
import { buildLoaders } from './buildLoaders';
import { buildPlugins } from './buildPlugins';
import { BuildOptions } from './types/types';


export function buildWebpack(options: BuildOptions): webpack.Configuration {
    const {mode, paths} = options
    return {  
        mode: mode ?? 'development',
        entry: paths.enrty,
        output: {
            filename: '[name].[contenthash].js',
            path: paths.output,
            clean: true
        },
        devServer: buildDevServer(options),
        plugins: buildPlugins(options),
        module: {
            rules: buildLoaders(),
          },
        resolve: {
          extensions: ['.tsx', '.ts', '.js'],
        },
        optimization: {
          runtimeChunk: 'single',
        },
    }

}