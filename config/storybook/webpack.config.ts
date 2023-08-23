import { Configuration } from 'webpack';
import path from 'path';
import { BuildPaths } from '../build/types/config';

export default ({ config }: { config: Configuration }): Configuration => {
  const paths: BuildPaths = {
    build: '',
    html: '',
    entry: '',
    src: path.resolve(__dirname, '..', '..', 'src'),
  };
  config.resolve?.modules?.push(paths.src);
  config.resolve?.extensions?.push('ts', 'tsx');

  config.module.rules.push({
    test: /\.css$/i,
    use: ['style-loader', 'css-loader', 'postcss-loader'],
  });

  return config;
};
