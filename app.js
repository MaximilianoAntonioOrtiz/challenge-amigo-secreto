// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
//Crear un array para almacenar los nombres
let amigos = [];
// Desarrolla una función, que permita al usuario ingresar un nombre en el campo de texto y añadirlo a la lista
//  de amigos creada anteriormente.
function agregarAmigo() {
    let inputAmigo = document.getElementById('amigo');
    let valorAmigo = inputAmigo.value;
    console.log(valorAmigo);
    

    // validar entrada
    if (valorAmigo !== "") {
        amigos.push(valorAmigo);
        console.log(amigos);
        inputAmigo.value = "";
    } else {
        alert("Por favor, inserte un nombre.");
    }
}
