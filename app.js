var http=require('http');
var fs=require('fs');
var he=require('./creatingModule.js');

console.log(he.sayHello());

var read_string=fs.readFileSync('tes.txt','utf8');
console.log(read_string);
