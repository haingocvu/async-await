let fs = require('fs');
let readFilePromise = (filename)=>{
	return new Promise((resolve, reject)=>{
		fs.readFile(filename, 'utf8', (err, res)=>{
			if(err) return reject(err);//return reject(err) tuong duong voi reject(err);return;
			resolve(res);//van dung duoc return resolve(res). tuong duong nhu tren. k can return vi da end roi
		})
	})
}
readFilePromise('./a.txt')
.then(res=>console.log(res), err=>console.log(err +''));