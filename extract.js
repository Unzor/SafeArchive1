var jsbintool = require("jsbintool");
var file = process.argv[2];
var pas = process.argv[3];

var fs = require("fs");
var contents = atob(jsbintool.binaryToString(fs.readFileSync(file)))

if (!fs.existsSync(file.split(".").shift())) {
  fs.mkdirSync(file.split(".").shift()); 
}

var pass = atob(contents.split(">").shift().slice(1, contents.length)).split(":").pop();
if (pass == pas) {
var files = contents.split(">")[1].split("|");
files.forEach(function(file2, index){
var name = file2.split("]);").shift().slice(2, file2.split("]);").shift().length);
var con = file2.split("]);").pop();
 fs.writeFileSync(file.split(".").shift() + "/" + name, atob(con))
})
} else {
  console.log("Wrong password!");
}
