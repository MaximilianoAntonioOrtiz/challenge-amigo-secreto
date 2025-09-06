// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

// Crear un array para almacenar los nombres
let amigos = [];

// Desarrolla una función, que permita al usuario ingresar un nombre en el campo de texto y añadirlo a la lista
// de amigos creada anteriormente.
function agregarAmigo() {
    let inputAmigo = document.getElementById('amigo');
    let valorAmigo = inputAmigo.value;
    console.log(valorAmigo);

    // validar entrada
    if (valorAmigo !== "") {
        amigos.push(valorAmigo);   // agregar al array
        console.log(amigos);
        inputAmigo.value = "";      // limpiar input
        mostrarAmigos();            // actualiza la lista
    } else {
        alert("Por favor, inserte un nombre.");
    }
}

/* Crea una función que recorra el array amigos y agregue cada nombre como un elemento <li> dentro de una lista HTML. 
   Usa innerHTML para limpiar la lista antes de agregar nuevos elemento */
/* Obtener el elemento de la lista: Utilizar document.getElementById() o document.querySelector() para seleccionar 
   la lista donde se mostrarán los amigos. */
function mostrarAmigos() {
    let lista = document.getElementById('listaAmigos');
    /* Limpiar la lista existente: Establecer lista.innerHTML = "" para asegurarse de que no haya duplicados al actualizar. */
    lista.innerHTML = "";
    /* Iterar sobre el arreglo: Usa un bucle for para recorrer el arreglo amigos y crear elementos de lista (<li>) para cada título. */
    /* Agregar elementos a la lista: Para cada amigo, crear un nuevo elemento de lista. */
    for (let i = 0; i < amigos.length; i++) {
        let elementoAmigo = amigos[i];
        let li = document.createElement("li"); // crear <li>
        li.textContent = elementoAmigo;        // asignar el nombre
        lista.appendChild(li);                  // agregar a lista <ul>
    }
    
}
