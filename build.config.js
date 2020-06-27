/**
 * Created by Culbertli on 2020/4/25.
 */
var glob = require('glob');
var HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
//动态生成html
//获取html-webpack-plugin参数的方法
var getHtmlConfig = function(name,chunks){
  return {
    template:`./src/pages/${name}.html`,
    filename:`pages/${name}.html`,
    inject:true,
    hash:false,
    chunks:[name]
  }
}
//动态添加入口
function getEntry(){
  var entry = {};
  //读取src目录所有page入口
  glob.sync('./src/js/**/*.js').forEach(function(name){
    var start = name.indexOf('src/') + 4;
    var end = name.length - 3;
    var eArr = [];
    var n = name.slice(start,end);
    n= n.split('/')[1];
    eArr.push(name);
    eArr.push('babel-polyfill');
    entry[n] = eArr;
  })
  return entry;
}
const webpackMerge = require('webpack-merge');
const baseConfig = require('./base.config.js');
module.exports =webpackMerge(baseConfig,{
  entry:getEntry(),
  mode:"production",
  //插件
  plugins:[
    new CleanWebpackPlugin(),
  ]
})
//配置页面
var entryObj = getEntry();
var htmlArray = [];
Object.keys(entryObj).forEach(function(element){
  htmlArray.push({
    _html:element,
    title:'',
    chunks:[element]
  })
})
//自动生成html模板
htmlArray.forEach(function(element){
  module.exports.plugins.push(new HtmlWebpackPlugin(getHtmlConfig(element._html,element.chunks)));
})
