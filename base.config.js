/**
 * Created by Culbertli on 2020/5/30.
 */
var webpack = require('webpack');
var MiniCssExtractPlugin = require("mini-css-extract-plugin");
var autoprefixer = require('autoprefixer');
var TransferWebpackPlugin = require('transfer-webpack-plugin');
var path = require('path');
//动态加时间戳
function stamp(){
  var date = new Date();
  date = Date.parse(date);
  return date;
}
module.exports = {
  output:{
      path:path.resolve(__dirname,'dist'),
      filename:`js/[name]-${stamp()}-bundle.js`,
  },
  module:{
    rules:[
      {
        test:/\.js$/,
        exclude:/(node_modules)/,
        include: /src/,
        use:[
          {
            loader:'babel-loader',
            options:{
              presets:['@babel/preset-env',],
              plugins:['@babel/transform-runtime']
            }
          }
        ]
      },
      {
        test:/\.css$/,
          //use:['style-loader','css-loader','postcss-loader'],//css不分离写法
          //css分离写法
          use:[MiniCssExtractPlugin.loader,"css-loader",{
            loader: "postcss-loader",
            options: {
              plugins: [
                autoprefixer({
                  browsers: ['ie >= 8','Firefox >= 20', 'Safari >= 5', 'Android >= 4','Ios >= 6', 'last 4 version']
                })
              ]
            }
        }]
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2)\w*/,
        loader: 'url-loader?limit=1000000'
      },
      {
        test:/\.(png|jpg|gif|jpeg)$/,
        use:[
          {
            loader:'url-loader',
            options:{
              limit:5000,
              //publicPath:'attachment',
              name: '/attachment/images/[name].[ext]',
              esModule: false,
            }
          }
        ]
      }
    ]
  },
  performance:{
    hints:false
  },
  //插件
  plugins:[
    new MiniCssExtractPlugin({
      filename: `css/[name]-${stamp()}.css`
    }),
    new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery",
      jquery: "jquery",
      "window.jQuery": "jquery"
    }),
    new TransferWebpackPlugin([
      {
        from: 'assets',
        to: 'assets'
      }
    ], path.resolve(__dirname,"src")),
  ]
}





