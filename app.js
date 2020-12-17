/*


let registrarEmail = prompt("introduce tu email");

let email = registrarEmail;

alert(email);
*/

function recogerDatos (){
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    let mensaje = "tu email es " + email + " y tu contra es " + '"' + password +'"'; 

    alert("thank you for logged in. Have a nice day!")
    console.log(mensaje)
}
function borrarForm (){
    document.getElementById("form").reset();
}
