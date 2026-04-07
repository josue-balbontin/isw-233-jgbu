import path from 'path';
import { fileURLToPath } from 'url';
import HtmlWebpackPlugin from 'html-webpack-plugin';


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
    ],
    module: {
      rules: [
     
      ],
    },
  };
};