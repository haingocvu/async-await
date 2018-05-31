let add = (a, b)=>{
	return new Promise((resolve, reject)=>{
		setTimeout(()=>{
			if(typeof a != 'number' || typeof b != 'number')
				reject(new Error('not a number'));
			resolve(a + b);
		}, 2000)
	})
}
let multiply = (a, b)=>{
	return new Promise((resolve, reject)=>{
		setTimeout(()=>{
			if(typeof a != 'number' || typeof b != 'number')
				reject(new Error('not a number'));
			resolve(a * b);
		}, 2000)
	})
}
let divide = (a, b)=>{
	return new Promise((resolve, reject)=>{
		setTimeout(()=>{
			if(typeof a != 'number' || typeof b != 'number')
				reject(new Error('not a number'));
			if(b == 0) reject(new Error('chia cho 0'));
			resolve(a / b);
		}, 2000)
	})
}

let tinhdientich = async (a, b, h, cb)=>{
	try{
		let ab = await add(a, b);
		let abh = await multiply(ab, h);
		let res = await divide(abh, 2);
		cb(undefined, res);
		//console.log(res);		
	}catch(e){
		cb(e);
	}
}
tinhdientich('2', 3, 2, (err, res)=>{
	if(err) return console.log(err + '');
	console.log(res);
});