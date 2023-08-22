function searchNum(){
const array = [11, 14, 16, 21, 27, 29, 34, 36, 39, 41, 45, 47,50,55,62]

let left = 0;
let right = array.length - 1;

const user = document.getElementById("inputNo").value;

while (left <= right) {

    let mid = Math.floor((left + right) / 2);
    if (array[mid] == user) {
         document.getElementById("foundNum").innerHTML = `${user} Found at index ${mid}`
        break;
    }
    else if (array[mid] > user) {
        right = mid - 1;
    }
    else {
        left = mid + 1;
    }

}
if (left > right) {
    document.getElementById("foundNum").innerHTML = "Element Not Found"
}
}