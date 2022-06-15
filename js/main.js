// Métodos de acceso a los elementos html

var titulos = document.getElementsByTagName('h1'); // Poco utilizada

console.log(titulos[0]);

// El más utilizado es el que selecciona por el atributo id

var titulo = document.getElementById('titulo');

console.log(titulo);

// Manipulación de los elementos del DOM desde JavaScript

// Modificar su contenido, por ejemplo

titulo.innerHTML = 'Hola ¿Qué tal?';

// Modificar su estilo

titulo.style.color = 'crimson';

// Modificar su visibilidad

// setTimeout(function () {
//     titulo.style.display = 'none';
// }, 3000);

function renderizarColorVerde() {
    titulo.style.color = 'green';
}

function renderizarColorAzul() {
    titulo.style.color = 'blue';
}

function renderizarColorNaranja() {
    titulo.style.color = 'orange';
}

// ¿Como invocamos las funciones a partir 
// de eventos de usuario?

// 1ª Forma con el evento en un elemento en HTML

// Ver botón en html

// 2ª Forma es con un "escuchador de eventos"

document.getElementById('btn-orange').addEventListener('click', function () {
    // Código que quiero que se ejecute cuando se haga click sobre el elemento escuchado
    renderizarColorNaranja();
})

