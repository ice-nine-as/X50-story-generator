const ExtractCssChunks = require('extract-css-chunks-webpack-plugin');
const HardSourcePlugin = require('hard-source-webpack-plugin');
const { resolve, }     = require('path');
const webpack          = require('webpack');

module.exports = {
  name:    'es5',
  target:  'web',
  //devtool: 'source-map',
  entry: [
    'babel-polyfill',
    resolve(__dirname, '../src/index.tsx'),
  ],

  output: {
    filename:   '[name].js',
    library:    'StoryGeneratorModule',
    path:       resolve(__dirname, '../dist/es5/'),
    publicPath: '/static/',
  },

  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: 'awesome-typescript-loader?module=esnext&target=es5',
      },

      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },

      {
        test: /\.less$/,
        exclude: /node_modules/,
        use: ExtractCssChunks.extract({
          use: [
            {
              loader: 'css-loader',
              options: {
                modules: true,
                localIdentName: '[name]__[local]--[hash:base64:5]',
              },
            },

            'less-loader',
          ],
        }),
      },
    ],
  },

  resolve: {
    extensions: [
      '.css',
      '.js',
      '.jsx',
      '.less',
      '.ts',
      '.tsx',
    ],
  },

  plugins: [
    new HardSourcePlugin(),
    new ExtractCssChunks(),
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('development'),
      },
    }),
  ],
};