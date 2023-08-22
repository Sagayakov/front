import HtmlWebpackPlugin from 'html-webpack-plugin'
import ReactRefreshPlugin from '@pmmmwh/react-refresh-webpack-plugin'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer'

import { BuildOptions } from './types/config'
import {
  DefinePlugin,
  WebpackPluginInstance,
  HotModuleReplacementPlugin,
} from 'webpack'

export const buildPlugins = (
  options: BuildOptions
): WebpackPluginInstance[] => {
  const { paths } = options

  return [
    new HtmlWebpackPlugin({
      template: paths.html,
    }),
    new ReactRefreshPlugin(),
    new HotModuleReplacementPlugin({
      hot: true,
    }),
    new MiniCssExtractPlugin({
      filename: 'css/[name].[contenthash:8].css',
      chunkFilename: 'css/[name].[contenthash:8].css',
    }),
    new DefinePlugin({}),
    new BundleAnalyzerPlugin({
      openAnalyzer: false,
    }),
  ]
}
