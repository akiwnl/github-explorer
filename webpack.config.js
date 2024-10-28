const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const isDevelopment = process.env.NODE_ENV !== "production";

module.exports = {
  mode: isDevelopment ? "development" : "production",
  devtool: isDevelopment ? "eval-source-map" : "source-map",
  entry: path.resolve(__dirname, "src", "index.tsx"),
  output: {
    path: path.resolve(__dirname, "dist"), // Caminho absoluto para a pasta de saída
    filename: "bundle.js", // Nome do arquivo
  },
  resolve: {
    extensions: [".js", ".jsx", ".ts", ".tsx"], // Adiciona as extensões que o webpack deve considerar
  },
  devServer: {
    static: {
      directory: path.resolve(__dirname, "public"), // Substitui contentBase por static
    },
    compress: true,
    port: 3000,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "public", "index.html"),
    }),
  ],
  module: {
    rules: [
      {
        test: /\.(j|t)sx$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        use: ["style-loader", "css-loader", "sass-loader"], // Aqui removi o objeto e usei diretamente um array
      },
    ],
  },
};
