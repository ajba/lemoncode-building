const { merge } = require("webpack-merge");
const prod = require("./webpack.prod.js");
const { BundleAnalayzerPlugin } = require("webpack-bundle-analayzer");

module.exports = merge(prod,{
    plugins: [new BundleAnalyzerPlugin()],
});