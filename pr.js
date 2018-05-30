let aPromise = new Promise((resolve, reject)=>{
	setTimeout(()=>{
		//resolve("thanh cong");
		reject("that bai");
	}, 2000)
})
aPromise.then(res=>console.log(res), err=>console.log(err));