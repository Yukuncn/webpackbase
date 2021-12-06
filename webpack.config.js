const path=require('path')
const HtmlWebpackPlugin=require('html-webpack-plugin')
module.exports={
    mode:'development',
    entry:path.join(__dirname,'src','index.js'),
    output:{
        path:path.join(__dirname,'dist'),
        filename:'bundle.js'
    },
    //配置解析模块的规则
    module:{
        rules:[ {
            test:/\.js$/,//如果检测到js文件
            loader:"babel-loader",
            include:path.join(__dirname,'src'),//处理的范围
            exclude:/node_modules/
        }
    ]
           

  },
    plugins:[
        new HtmlWebpackPlugin({
            //以什么文件作为html的模板文件
            template:path.join(__dirname,'src','index.html'),
            filename:'index.html'
        })
    ],
    devServer:{
     port:8081,
     static:path.join(__dirname,'dist')
    }
}