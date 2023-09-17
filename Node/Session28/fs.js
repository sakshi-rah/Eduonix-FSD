const { throws } = require('assert');
var fs = require('fs');

//to uncomment the code press ctr+/

//01 file writting
// fs.writeFile('files/file.txt',"Welcome to Files container!, Hello Sakshi",(err)=>{
//     if(err)
//         console.log("Error",err);
//     else
//         console.log("File Saved!");
// })

//01 file reading
// fs.readFile('files/file.txt',function(err, data){
//     if(err)
//        throw err;
//     else
//         console.log("Data: ", data.toString());
// })

// apprend file
// fs.appendFile("files/file.txt", " my new data here", (err) => {
//     if (err)
//         console.log('error: ', err)
//     else
//         console.log("append data successfully!")
// })

//delete file
fs.unlink('files/hh.txt', function(err){
    if(err)
        throw err;
    else
        console.log("File Deleted Successfully...!!!!");

})