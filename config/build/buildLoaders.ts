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

  const imgLoader = {
    test: /\.(png|jpe?g|gif|svg|webp|ico|mp3)$/i,
    type: 'asset/resource',
    generator: {
      filename: 'assets/img/[name][ext]',
    },
  }

  const fontLoader = {
    test: /\.(woff2?|eot|ttf|otf)$/i,
    type: 'asset/resource',
    generator: {
      filename: 'assets/font/[name][ext]',
    },
  }

  const cssLoader = {
    test: /\.css$/i,
    use: [
      isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
      'css-loader',
      'postcss-loader',
    ],
  }

  return [imgLoader, fontLoader, cssLoader, typescriptLoader]
}
