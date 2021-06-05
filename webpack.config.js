const HtmlWebpackPlugin = require('html-webpack-plugin');
const {resolve} = require('path');
require('html-webpack-plugin');

module.exports = {
 //单入口
 entry: {
  one:["./src/index.js"]
 },

 output: {
     filename: "[name].js",
     path:resolve(__dirname, 'build')
 },

 module: {
   rules: [

   ]
 },

 plugins: [
   new HtmlWebpackPlugin({
     template: "./src/index.html"
   })
 ],

 target: "web",
}