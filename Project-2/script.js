let input = document.getElementById("input");
let list = document.getElementById("list-container");

function addTask(){
    if(input.value ===''){
        alert('You must write something!')
    }else{
        let li = document.createElement("li");
        li.innerHtml = input.value;
        list.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "/u00d7";
        li.appendChild(span);
    }
    input.value = ''
   
}
