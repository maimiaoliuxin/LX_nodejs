console.log('区别在于http.createServer()的参数，一个是express对象实例app，一个是回调')

//第一种 app.get()
// var express = require('express');
// var app = express();
// app.use(express.static(__dirname+'/public'))
// var route = require('./route')(app);
// app.listen(8084)




// 第二种 http.createServer(function(req,res){})
// var http = require("http");
// var app = http.createServer(function(request, response) {
//   response.writeHead(200, {"Content-Type": "text/plain"});
//   response.end("Hello world!第二种");
// });

// app.listen(8084, "localhost");


/*区别在于http.createServer()的参数，一个是express对象实例app，一个是回调*/

//第三种  app.use(function(req,res){}) 或者app.get
// var express = require("express");
// var http = require("http");

// var app = express();

// app.use(function(request, response) {
//   response.writeHead(200, { "Content-Type": "text/plain" });
//   response.end("Hello world!!!!!!第三种\n");
// });

// http.createServer(app).listen(8084);



//第四种
// var fs = require('fs');
// var options = {
//   key: fs.readFileSync('E:/ssl/myserver.key'),
//   cert: fs.readFileSync('E:/ssl/myserver.crt'),
//   passphrase: '1234'
// };

// var https = require('https');
// var express = require('express');
// var app = express();

// app.get('/', function(req, res){
//   res.send('Hello World Expressjs');
// });

// var server = https.createServer(options, app);
// server.listen(8084);
// console.log('Server is running on port 8084');



// //第五种
// var express = require("express");
// var http = require("http");
// var path = require('path');
// var app = express();

// //设定port变量，意为访问端口
// app.set('port', process.env.PORT || 8084);
// // 设定views变量，意为视图存放的目录
// app.set('views', path.join('./', 'views'));
// // 设定view engine变量，意为网页模板引擎
// app.set('view engine', 'jade');

// // app.use(express.favicon());
// // app.use(express.logger('dev'));
// // app.use(express.bodyParser());
// // app.use(express.methodOverride());
// //app.use(app.router);

// // // 设定静态文件目录，比如本地文件
// // // 目录为demo/public/images，访问
// // // 网址则显示为http://localhost:8084/images
// app.use(express.static(path.join('./', 'public')));
// app.get('/', function(req, res){
//   var body = 'Hello World';
//   res.setHeader('Content-Type', 'text/plain');
//   res.setHeader('Content-Length', body.length);
//   res.end(body);
// });
// app.get('/api', function(request, response) {
//    response.send({name:"张三",age:40});
// });
// var api = require('./route/api')
// app.get('/api2',api.index)

// app.get('/redirect', function(req,res){
// 	res.redirect('http://www.baidu.com')
// })
// app.get('/index', function(req, res){
// 	res.sendfile('./views/index.html');
// })
// app.listen(8084);


//第六种 动态网页 数据可改
var express = require('express');
var app = express();
// 加载hbs模块
var hbs = require('hbs');
// 加载数据模块
var blogEngine = require('./blog');
 
// 指定模板文件的后缀名为html
app.set('view engine', 'html');
// 运行hbs模块
app.engine('html', hbs.__express);
app.use(express.static('public'));
//app.use(express.bodyParser());


app.get('/', function (req, res){
    res.render('admin',{title:"最近文章", entries:blogEngine.getBlogEntries()});//默认views目录下.html文件
});
app.listen(8084);