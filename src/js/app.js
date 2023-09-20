
// task 1
// Eger user ok click etse, body background-color black olacag.

let username = confirm("sayta davam etmək istəyirsinizmi?");
if (username > 0) {document.body.style.backgroundColor = "black"}
else {document.body.style.backgroundColor = "yellow"};



// task 2
// eger userin yasi 18 den kicikdirse, xeberdarliq mesaji cixsin

let username1 = prompt("Yasinizi daxil edin");
let username1NumberType = Number(username1);
if (username1NumberType < 18) {alert("Saytımız 18 yaşdan kiçiklər üçün nəzərdə tutulmayıb!")}
else {alert("Buyurun yuxarı başa keçin")};


// task 3

let Person = {
    name: "Əlövsət",
    surname: "Məmmədəliyev",
    password: "****",
    fullname: function(name, surname, password) {
        return `${this.name} ${this.surname} ` ;
    }
}


let personFullName = Person.fullname();

function upperFull () {
    document.getElementById(`goodjob`).innerHTML = personFullName.toUpperCase();
}




