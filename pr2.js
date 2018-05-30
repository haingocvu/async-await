let add = (a, b)=>{
	return new Promise((reslv, rejct)=>{
		setTimeout(()=>{
			if(typeof a != 'number' || typeof b != 'number')
				return rejct(new Error('not a number'));
			reslv(a + b);
		}, 2000)
	})
}
add(8, 2)
	.then(res=>console.log(res), err=>console.log(err + ''));