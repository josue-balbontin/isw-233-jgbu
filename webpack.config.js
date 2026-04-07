import path from 'path';
import { fileURLToPath } from 'url';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import CssMinimizerPlugin from 'css-minimizer-webpack-plugin';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default (env, argv) => {
  const isProduction = argv.mode === 'production';

  return {
    entry: './src/main.js',
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: isProduction ? '[name].[contenthash].js' : '[name].js',
      clean: true, 
    },
    devServer: {
      static: path.resolve(__dirname, 'dist'),
      hot: true,
      open: true,
      port: 3000,
    },
    devtool: isProduction ? false : 'source-map',
    plugins: [
      new HtmlWebpackPlugin({
        template: './src/index.html',
        minify: isProduction ? {
          collapseWhitespace: true,
          removeComments: true,
        } : false,
      }),

      new MiniCssExtractPlugin({
        filename: isProduction ? '[name].[contenthash].css' : '[name].css',
      }),
    ],
    module: {
      rules: [

        {
          test: /\.html$/i,
          loader: 'handlebars-loader',
          options: {
            partialDirs: [path.resolve(__dirname, 'src/partials')],
          },
        },

        {
          test: /\.css$/i,
          resourceQuery: /inline/,
          use: ['postcss-loader'],
          type: 'asset/source', 
        },

        {
          test: /\.css$/i,
          resourceQuery: { not: [/inline/] }, 
          use: [
            MiniCssExtractPlugin.loader, 
            'css-loader', 
            'postcss-loader'
          ],
        },

        {
          test: /\.(png|jpe?g|gif|svg|webp)$/i,
          type: 'asset', 
          generator: {
            filename: 'images/[name].[contenthash][ext]',
          },
        },

        {
          test: /\.(woff|woff2|eot|ttf|otf)$/i,
          type: 'asset/resource',
          generator: {
            filename: 'fonts/[name].[contenthash][ext]',
          },
        },
      ],
    },
    optimization: {
      minimizer: [
        '...', 
        new CssMinimizerPlugin(), 
      ],
    },
  };
};