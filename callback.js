// let square = (a, b, h)=>(a+b)*h/2;
// console.log("dien tich la: " + square(2,3,2));
let add = (a, b, cb)=>{
	setTimeout(()=>{
		if(typeof a != 'number' || typeof b != 'number'){
			return cb(new Error('not a number'));
		}
		return cb(undefined, a + b);
	}, 1000);
}
let multiply = (a, b, cb)=>{
	setTimeout(()=>{
		if(typeof a != 'number' || typeof b != 'number'){
			return cb(new Error('not a number'));
		}
		return cb(undefined, a * b);
	}, 1000);
}
let devide = (a, b, cb)=>{
	setTimeout(()=>{
		if(typeof a != 'number' || typeof b != 'number'){
			return cb(new Error('not a number'));
		}
		if(b == 0) return cb(new Error('chia cho 0'));
		return cb(undefined, a / b);
	}, 1000);
}
let dientichhinhthang = (a, b, h, cb)=>{
	add(a, b, (e, res)=>{
		if(e) return cb(e);
		multiply(res, h, (e, res)=>{
			if(e) return cb(e);
			devide(res, 2, (e, dientich)=>{
				if(e) return cb(e);
				cb(undefined, dientich);
			})
		})
	})
}
dientichhinhthang(2, 3, 2, (e, res)=>{
	if(e) return console.log(e + '');
	console.log('dien tich la: ' + res);
})
// add(2, '4', (err, res)=>{
// 	if (err) {
// 		return console.log("Error: " + err);
// 	}
// 	return console.log("ket qua: " + res);
// })