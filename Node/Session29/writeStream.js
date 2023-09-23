var fs = require('fs');
var data = "I am sakshi rahangdale, Full stack developer! ";
var info = "I am 22 yr. old."

var writestream = fs.createWriteStream('./File/file.txt');
writestream.write(data);
writestream.write(info);
writestream.end();
writestream.on('finish',function(){
    console.log('data added');
})
writestream.on('error',function(error){
    console.log(error.stack);
})
console.log('Complete Program');
