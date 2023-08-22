import { ResolveOptions } from 'webpack'
import { BuildOptions } from './types/config'

export const buildResolvers = (options: BuildOptions): ResolveOptions => {
  return {
    extensions: ['.ts', '.tsx', '.js'],
  }
}
