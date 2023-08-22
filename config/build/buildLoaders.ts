import { BuildOptions } from './types/config'
import { RuleSetRule } from 'webpack'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'

export const buildLoaders = (options: BuildOptions): RuleSetRule[] => {
  const { isDev } = options
  const typescriptLoader = {
    test: /\.tsx?$/i,
    use: 'ts-loader',
    exclude: /node_modules/,
  }

  const fileLoader = {
    test: /\.(svg|png|jpe?g|gif)$/i,
    use: 'file-loader',
  }

  const cssLoader = {
    test: /\.css$/i,
    use: [
      isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
      'css-loader',
      'postcss-loader',
    ],
  }

  return [typescriptLoader, fileLoader, cssLoader]
}
