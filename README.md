
## 项目初始化 ##
输入 `npm init` 命令（webstorm中在Terminal中） 初始化项目，生成package.json文件

## 依赖模块安装

安装 express、bodyParser、cookies、swig、mongoose、markdown

```
npm install --save express

npm install --save body-parser cookies swig mongoose markdown
```

## 结构目录
* db                数据库存储目录
* models            数据库模型文件目录
* node_modules      node第三方模块目录
* public            公共文件目录（CSS、JS、image...）
* routers           路由文件目录
* schemas           数据库结构文件（schemas）目录
* views             模板视图文件目录
* app.js            应用（启动）入口文件
* package.json


## 数据库

安装 mongodb  链接： https://www.mongodb.com/

在cmd中运行mongodb 
` 安装路径 + bin\mongod --dbpath=文件路径 --port=端口号 `

eg ` E:\soft\mongodb\bin>mongod --dbpath=E:\WeChat\wechat\db --port=27018 `


mac: 
`mongod --dbpath ~/Desktop/web/wechat/db --port 27018`

用mongo启动： `mongo 127.0.0.1:27018/wechat`


安装Robomongo 

mongoose 文档 ：http://mongoosejs.com/docs/guide.html


启动app.js 
｀node app.js｀
