let add = (a, b)=>{
	return new Promise((resolve, reject)=>{
		if(typeof a != 'number' || typeof b != 'number')
			return reject(new Error('not a number'));
		resolve(a + b);
	})
}
let multiply = (a, b)=>{
	return new Promise((resolve, reject)=>{
		if(typeof a != 'number' || typeof b != 'number')
			return reject(new Error('not a number'));
		resolve(a * b);
	})
}
let divide = (a, b)=>{
	return new Promise((resolve, reject)=>{
		if(typeof a != 'number' || typeof b != 'number')
			return reject(new Error('not a number'));
		if(b == 0) return reject(new Error('chia cho 0'));
		resolve(a / b);
	})
}
let tinhDienTich = (a, b, h)=>{
	return add(a, b)
	.then(res=>multiply(res, h))
	.then(res=>divide(res, 2));
}
tinhDienTich(2, 3, 2)
.then(square=>console.log(square))
.catch(err=>console.log(err + ''));