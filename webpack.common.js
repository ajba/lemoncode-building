const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
    context: path.resolve(__dirname, "src"),
    // ENTRYPOINT
    entry: {
      app: './index.tsx',  
      appStyles: ['./reset.css','./styles.scss']
  },
    // BUILD OUTPUT
    output: {
      filename: "[name].[chunkhash].js",
      path: path.resolve(__dirname,"dist"),
    },
    resolve: {
      extensions: [".js",".tsx","ts"],
    },
    module: {
      rules: [
        // JS
        {
          test: /\.tsx?$/,
          exclude: /node_modules/,
          loader: 'babel-loader',
        },{
          //SASS
          test: /\.scss$/,
          exclude: /node_modules/,
          use: [MiniCssExtractPlugin.loader, "css-loader", {
            loader: "sass-loader",
            options: {
              implementation: require("sass"),
            }, 
          }],
        },
        //CSS
        {
          test: /\.css$/,
          use: [MiniCssExtractPlugin.loader, "css-loader"],
        },
        // IMAGES
        {
          test: /\.html$/,
          exclude : /node_modules/,
          loader: "html-loader",
        },
      ],
    },
    plugins: [
      new HtmlWebpackPlugin({
          filenamr: "idnex.html",
          template: "index.html",
          scriptLoading: "blocking",
          hash: true,
      }),
      new MiniCssExtractPlugin({
        filename: "[name].css",
        chunkFilename: "[id].css",
    }),
      new CleanWebpackPlugin(),
  ],

  stats: "errors-only",
  devServer:{
      port: 9098,
      static: path.join(__dirname, "./"),
  },
  performance: {
    hints: false
  },
};
  