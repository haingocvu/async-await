let fs = require("fs");
fs.readFile("./a.txt", "utf8", (err, content)=>{
	if(err) return console.log("ERR: " + err);
	console.log("Content: " + content);
})
// let content = fs.readFileSync("./a.txt", "utf8");
// console.log(content);
console.log("end");