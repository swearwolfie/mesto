const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin'); 

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  devServer: {
    static: './dist',
  },
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, {
          loader: 'css-loader'
        }, 
        "postcss-loader"
      ],
        },
        {
          test: /\.(png|svg|jpg|gif|woff(2)?|eot|ttf|otf)$/,
          type: 'asset/resource',
          generator: {
            filename: 'images/[name][ext]'
          }
          },
          {
            test: /\.(woff(2)?|eot|ttf|otf)$/,
            type: 'asset/resource',
            generator: {
              filename: 'fonts/[name][ext]'
            }
            }

    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html'
    }),
    new MiniCssExtractPlugin()
  ],
};