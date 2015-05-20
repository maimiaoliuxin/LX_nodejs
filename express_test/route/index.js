module.exports = function(app) {
	app.get('/',function(req, res){
	    res.send('hello world第一种')
	})
	app.get('/customer',function(req, res){
	    res.send('customer page1')
	})
	app.get('/admin',function(req, res){
	    res.send('admin page2')
	})
	app.get('/index', function(req, res) {
	   res.sendfile('../views/index.html');
	});

}