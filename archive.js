var jsbintool = require("jsbintool");
var password = process.argv[3]
var fs = require("fs");

var x = require("./xor.js")

var conts = [];
var list = fs.readFileSync("SA1_CONTROL").toString();
list.split("\n").forEach(function(fname){
  var file = fs.readFileSync(fname).toString();
  conts.push("([" + fname + "]);" + btoa(file));
});



fs.writeFileSync(process.argv[2], jsbintool.stringToBinary(btoa("<" + btoa("PASSWORD:" + password) + ">" + conts.join("|"))))
