var fs=require('fs');

//01 async
// console.log("Starts....");
// fs.readFile('files/file2.txt',function(err,data){
//     if(err)
//         throw err;
//     else
//         console.log("Data:",data.toString());
// })
// console.log("Ends....");


//02 sync
console.log("Starts....");
try {

    fs.writeFileSync('files/file2.txt',"Synchronous Way of Writting File");
    console.log("Data Added Successfully")

} catch (error) {
    console.log("Error:",error)
}
console.log("Ends....");