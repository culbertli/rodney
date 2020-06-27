/**
 * Created by Culbertli on 2020/4/25.
 */
var webpack = require('webpack');
var glob = require('glob');
var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var os = require('os');
var portfinder = require('portfinder');
var fs = require('fs');
var ports = fs.readFileSync('./port.json', 'utf8');
ports = JSON.parse(ports);
portfinder.basePort = "8080";
portfinder.getPort(function(err, port) {
  ports.data.port = port;
  ports = JSON.stringify(ports,null,4);
  fs.writeFileSync('./port.json',ports);
});
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
///////////////////获取本机ip///////////////////////
function getIPAdress(){
  var interfaces = os.networkInterfaces();
  for(var devName in interfaces){
    var iface = interfaces[devName];
    for(var i=0;i<iface.length;i++){
      var alias = iface[i];
      if(alias.family === 'IPv4' && alias.address !== '127.0.0.1' && !alias.internal){
        return alias.address;
      }
    }
  }
}
var host = getIPAdress();
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
  mode:"development",
  //插件
  plugins:[
    new webpack.HotModuleReplacementPlugin()
  ],
  devServer:{
    contentBase:path.resolve(__dirname,'dist'), //最好设置成绝对路径
    historyApiFallback: false,
    hot: true,
    inline: true,
    stats: 'errors-only',
    host: host,
    port: ports.data.port,
    overlay: true,
    open:true
  }
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
