let addPr = (a, b)=>{
	return new Promise((resolve, reject)=>{
		setTimeout(()=>{
			if(typeof a != 'number' || typeof b != 'number')
				reject(new Error('not a number'));
			resolve(a + b);
		}, 2000)
	})
}
let AsyncF = async ()=>{
	let res = await addPr(2, 8);
	console.log(res);
}
AsyncF();