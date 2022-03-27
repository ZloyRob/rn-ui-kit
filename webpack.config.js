const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');

const HTMLWebpackPluginConfig = new HTMLWebpackPlugin({
  template: path.resolve(__dirname, './public/index.html'),
  filename: 'index.html',
  inject: 'body',
});

module.exports = {
  entry: path.join(__dirname, 'index.web.js'),
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, '/build'),
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx|ts|tsx)$/,
        exclude: /node_modules\/(?!()\/).*/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
          },
        },
      },
      {
        test: /\.svg$/i,
        issuer: /\.[jt]sx?$/,
        use: ['@svgr/webpack'],
      },
    ],
  },
  resolve: {
    alias: {
      'react-native$': 'react-native-web',
      '@storybook/react-native': '@storybook/react',
      'react-native-linear-gradient': 'react-native-web-linear-gradient',
    },
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
  },
  plugins: [HTMLWebpackPluginConfig],
  devServer: {
    historyApiFallback: true,
    static: {
      directory: path.join(__dirname, 'public'),
    },
    hot: true,
  },
};
