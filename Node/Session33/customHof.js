function filterArray(array, cb){
    const filterArray=[];
    for(let i=0; i<array.length; i++){
        if(cb(array[i])){
            filterArray.push(array[i]);
        }
    }
    return filterArray;
}

const numbers = [3,5,7,8,2,9,4,12,32,15];

const oldNumbers = filterArray(numbers,(old)=>{
    return old%2==1;
});
console.warn("Old Numbers is "+ oldNumbers);