class student {
    constructor(id, name, email, password, login) {
        this.id = id,
            this.name = name,
            this.email = email,
            this.password = password,
            this.login = login
    }

    display() {
        return `
        <table border="1">
        <tr> ${this.id}</tr>
        <tr> ${this.name}</tr>
        <tr> ${this.email}</tr>
        <tr> ${this.password}</tr>
        <tr> ${this.login}</tr>
        </table> <br>
     `
    }

}

let array = [];
function getItem() {
    let id = document.getElementById("id").value;
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let login = document.getElementById("login").value;

    let obj = new student(id, name, email, password, login);
    array.push(obj);
    display();

    document.getElementById("id").value = "";
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("password").value = "";
    document.getElementById("login").value = "";

}

function display(){
    html=`<table border="1">
                <tr> 
                    <th>ID</th> <th>NAME</th> <th>EMAIL</th> 
                    <th>PASSWORD</th> <th>LOGIN</th>
                </tr>
                </table>`;
   for (let x of array){
            html+=x.display();
   }

   document.getElementById("result").innerHTML=html;
}