let arr = [1, 2, 6, 3, 4];
let newarr = arr.map(e=>e*2);
let funcMul = e=>console.log(e);
newarr.forEach(funcMul);

//func return another func
// let myf = num=>{
// 	if(num > 0) return ()=>console.log("lon hon 0");
// 	return ()=>console.log("be hon hoac bang 0");
// }
// myf(8)();
//func with no return
let noreturn = ()=>{};
console.log(noreturn());

let getFunc = num=>{
	if(num > 0){
		return ()=>console.log("lon hon 0")
	}
	return ()=>console.log("be hon hoac bang 0")
}
getFunc(8)();