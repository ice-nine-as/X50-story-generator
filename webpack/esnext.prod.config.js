const { resolve, } = require('path');
const webpack      = require('webpack');

module.exports = {
  name: 'esnext',
  target: 'web',
  devtool: 'source-map',
  entry: [
    'babel-polyfill',
    resolve(__dirname, '../src/index.tsx'),
  ],

  output: {
    filename:      '[name].[chunkhash].js',
    chunkFilename: '[name].[chunkhash].js',
    path:          resolve(__dirname, '../dist/esnext/'),
    publicPath:    '/static/',
  },

  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: 'awesome-typescript-loader?module=esnext&target=esnext',
      },

      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },

      {
        test: /\.less$/,
        exclude: /node_modules/,
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
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production'),
      },
    }),

    new webpack.optimize.UglifyJsPlugin({
      compress: {
        screw_ie8: true,
        warnings: false,
      },

      mangle: {
        screw_ie8: true,
      },

      output: {
        screw_ie8: true,
        comments: false,
      },

      sourceMap: true,
    }),

    new webpack.HashedModuleIdsPlugin(),
  ],
};
