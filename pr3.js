let add = (a, b)=>{
	return new Promise((resolve, reject)=>{
		setTimeout(()=>{
			if(typeof a != 'number' || typeof b != 'number') return reject(new Error('not a number'));
			resolve(a + b);
		}, 2000)
	})
}
// add(2, 3)
// .then(res=>console.log(res), err=>console.log(err + ''));
// then can return a promise
add(2, '3')
.then(res=>add(res, 3))
.then(result=>console.log(result))
.catch(err=>console.log(err + ''));