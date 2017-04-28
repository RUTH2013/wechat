/**
 *  应用程序的启动（入口）文件
 */

// 加载express模块
var express = require('express');

// 加载模板处理模块 ---> 前后端进行分离
var swig = require('swig');

// 加载mongoose  ---> 处理数据库
var mongoose = require('mongoose');

// 加载body-parser --->用来处理post提交过来的数据
var bodyParser = require('body-parser');

//  加载cookie模块 　--> 用来处理登陆状态
var Cookies = require('cookies');


// 创建app应用 ===> NodeJS Http.createServer()
var app = express();

// 引入user模型
var User = require('./models/User');


// 设置静态文件托管
// 当用户访问的URL以/public开始， 那么直接返回对应的 __dirname + '/public' 的文件，    文件路径要写成 /public/xxx.css
app.use('/public',express.static(__dirname + '/public'));
app.use('/main',express.static(__dirname + '/views/main'));




/* 配置应用模板 */
// 定义当前应用使用的模板那引擎  （ 第一个参数 ：模板引擎的名称，也是模板文件的后缀, 第二个参数： 表示用于解析模板内容的方法 ）
app.engine('html',swig.renderFile);
// 设置模板文件存放的目录（第一个参数必须是views， 第二个参数是目录）
app.set('views','./views');
// 注册所使用的模板引擎 （第一个参数必须是view engine， 第二个参数是app.engine中定义的模板引擎的名称（第一个参数）是一致的）
app.set('view engine', 'html');

// 在开发过程中，需要取消模板缓存
swig.setDefaults({cache : false});  // ----> 清楚缓存


// bodyParser 设置
app.use( bodyParser.urlencoded({extended: true})) ; // 在post请求发过来的req中增加属性 body , 保存post提交过来的数据

// 设置cookies
app.use(function (req,res,next) {
    req.cookies = new Cookies(req,res);
    req.userInfo = {};
    if (req.cookies.get('userInfo')){  // 当cookies中有信息时
        try{
            req.userInfo = JSON.parse(req.cookies.get('userInfo')); // 读取存储的userInfo信息

            // 判断是否是管理员
            User.findById(req.userInfo._id).then(function (userInfo) {
                req.userInfo.isAdmin = Boolean(userInfo.isAdmin);
                next();
            });


        }catch (e){}
    }else{
        next();

    }
});



/**
 *  路由绑定
 *
 *  通过app.get() 或 app.post() 等方式可以把一个URL路径和一个或N个函数进行绑定
 *
 *  app.get('/',function(req,res,next){})
 *          req : request对象 -- 保存客户端请求相关的一些数据
 *          res : response对象 -- 服务端输出对象，提供了一些服务器端输出相关的一些方法 -- http.response
 *          next：方法， 用于执行下一个和路径匹配的函数


 *  内容输出
 *  通过res.send(string)发送内容只客户端
 *
 * */



/*  首页  */
/*
app.get('/',function (req,res,next) {
    // res.send('<h1>欢迎光临wechat</h1>');

    /!*
    * 读取views目录下的指定文件，解析并返回给客户端
    *   res.render()
    *       第一个参数 ： 表示模板的文件，相对于views目录 views/index.html
    *       第二个参数 ： 传递给模板使用的数据
    *
    * *!/

    res.render('index'); // ===> views/index.html
});*/


// 使用app.use()进行模块划分  根据不同的功能划分模板
app.use('/admin',require('./routers/admin'));  // 后台模块
app.use('/api',require('./routers/api'));  // api模块
app.use('/',require('./routers/main'));  // 前台模块



// 连接数据库
mongoose.connect('mongodb://localhost:27017/wechat',function (err) {
    if (err){
        console.log('数据库连接失败');
    }else {
        console.log('数据库连接成功');

        // 监听http请求
        app.listen(8081);
    }
});

