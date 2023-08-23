import type { Configuration } from 'webpack'
import { BuildOptions } from './types/config'
import { buildDevServer } from './buildDevServer'
import { buildLoaders } from './buildLoaders'
import { buildPlugins } from './buildPlugins'
import { buildResolvers } from './buildResolvers'

export const buildWebpackConfig = (options: BuildOptions): Configuration => {
  const {
    paths: { entry, build },
    mode,
    isDev,
  } = options

  return {
    mode,
    entry,
    output: {
      filename: '[name].[contenthash].js',
      path: build,
      clean: true,
    },
    plugins: buildPlugins(options),
    module: {
      rules: buildLoaders(options),
    },
    devServer: buildDevServer(options),
    resolve: buildResolvers(options),
    devtool: isDev ? 'inline-source-map' : undefined,
  }
}
