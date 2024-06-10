import path from 'path';

import { Configuration as WebpackConfiguration } from 'webpack';
import { Configuration as DevServerConfiguration } from 'webpack-dev-server';

import HtmlWebpackPlugin from 'html-webpack-plugin';

interface Configuration extends WebpackConfiguration {
  /**
   * Конфигурация webpack-dev-сервера.
   */
  devServer?: DevServerConfiguration;
}

enum Mode {
  /**
   * Production
   */
  PRODUCTION = 'production',
  /**
   * Development
   */
  DEVELOPMENT = 'development',
}

interface Env {
  /**
   * Мод сборки.
   */
  mode?: `${Mode}`;
  /**
   * Порт
   */
  port?: number;
}

export default (env: Env): Configuration => {
  const { mode, port } = env;

  return {
    mode: mode ?? 'production',
    entry: path.resolve(__dirname, 'src', 'index.tsx'),
    output: {
      path: path.resolve(__dirname, 'build'),
      filename: '[name].[contenthash].js',
    },
    module: {
      rules: [
        {
          test: /\.(j|t)sx?$/,
          use: [
            {
              loader: 'babel-loader',
            },
          ],
          exclude: /node_modules/,
        },
        {
          test: /\.css/,
          use: [
            { loader: 'style-loader' },
            {
              loader: 'css-loader',
              options: {
                modules: {
                  localIdentName: '[path]--[local]',
                },
              },
            },
            {
              loader: 'postcss-loader',
              options: {
                postcssOptions: {
                  plugins: [['postcss-nested']],
                },
              },
            },
          ],
        },
      ],
    },
    resolve: {
      extensions: ['.tsx', '.ts', '.js'],

      alias: {
        '@ui': path.resolve(__dirname, 'src/ui'),
        '@components': path.resolve(__dirname, 'src/components'),
      },
    },
    devServer: {
      port: port ?? 9000,
    },
    devtool: mode === Mode.DEVELOPMENT ? 'source-map' : undefined,
    plugins: [
      new HtmlWebpackPlugin({
        template: path.resolve(__dirname, 'src', 'index.html'),
        scriptLoading: 'defer',
      }),
    ],
  };
};
