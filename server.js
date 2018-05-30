let http = require('http');
let fs = require('fs');
http.createServer((req, response)=>{
	response.writeHead(200, {'Content-Type': 'text/html'});
	fs.readFile('./views/home.ejs', 'utf8', (err, res)=>{
		if(err) return console.log(err);
		response.end(res);
	})
}).listen(8080);