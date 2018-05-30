let add = (a, b)=>{
	return new Promise((resolve, reject)=>{
		setTimeout(()=>{
			if(typeof a != 'number' || typeof b != 'number') return reject(new Error('not a number add'));
			resolve(a + b);
		}, 1000)
	})
}
let multiply = (a, b)=>{
	return new Promise((resolve, reject)=>{
		setTimeout(()=>{
			if(typeof a != 'number' || typeof b != 'number') return reject(new Error('not a number multiply'));
			resolve(a + b);
		}, 2000)
	})
}
Promise.all([add(2, 8), multiply('3', 4)])
.then(res=>console.log(res))
.catch(err=>console.log(err + ''));
//chỉ đúng khi tất cả đều đúng
//all nhận tham số là 1 mảng các promise. all trả về 1 promise, vì thế t có thể dùng then để handle.
//res là 1 mảng các giá trị trả về của từng promise tham số.
//all chỉ trả về resolve khi tất cả các promise tham số đều trả về resolve
//nó 1 tham số nào đó trả về reject thì all trả về reject.

Promise.race([add(2, 8), multiply('3', 4)])
.then(res=>console.log(res))
.catch(err=>console.log(err + ''));

//kết quả trả về đầu tiên
//race nhận tham số là 1 mảng các promise. trả về 1 promise, vì thế t dùng then() để handle race.
//promise nào trả về kết quả đầu tiên (bất kể resolve hay reject) thì nó sẽ là kết quả của cả hàm race.