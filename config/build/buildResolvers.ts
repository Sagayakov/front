import { ResolveOptions } from 'webpack'
import { BuildOptions } from './types/config'

export const buildResolvers = (options: BuildOptions): ResolveOptions => {
	const {paths:{src}} = options
  return {
    extensions: ['.ts', '.tsx', '.js'],
		preferAbsolute: true,
    modules: [src, 'node_modules'],
    mainFiles: ['index'],
    alias: {},
  } 
}
