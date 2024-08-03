let arrProductos = ["yerba", "arroz", "aceite", "fideos", "choclo", "agua", "gaseosa", "azucar", "manteca", "harina"];
let arrPrecios = [3699, 3680, 3199, 1800, 1449, 7200, 1350, 3280, 2989, 943];
let arrCantidad = [5, 5, 5, 5, 5, 5, 5, 5, 5, 5];
let total = 0; // Variable para almacenar el total acumulado

// modal
var modal = document.getElementById("myModal"); 
var span = document.getElementsByClassName("close")[0]; 

document.querySelectorAll(".botoncomprar").forEach(button => {
    button.addEventListener("click", event => {
        let productoIndex = parseInt(event.target.getAttribute("data-producto")); // Asegurarse de que es un número
        let cantidadInput = document.getElementById(`cant${productoIndex}`); // Encuentra el campo de entrada correspondiente por su ID
        let cantidad = cantidadInput.value;
        cantidad = Number(cantidad);

        if (cantidad > 0 && (arrCantidad[productoIndex] - cantidad) >= 0) {
            comprar(cantidad, productoIndex);
        } else {
            alert("Ingrese una cantidad menor");
        }
    });
});

function comprar(cantidad, productoIndex) {

    modal.style.display = "block";

    total += cantidad * arrPrecios[productoIndex]; // Actualiza el total acumulado
    document.getElementById("total").innerText = total;
    arrCantidad[productoIndex] -= cantidad; // Actualiza la cantidad disponible
}

// Modal

// Obtener el elemento <span> que cierra el modal
// Cuando el usuario haga clic en <span> (x), cierra el modal

span.onclick = function() {
    modal.style.display = "none";
}

// Cuando el usuario haga clic en cualquier parte fuera del modal, cierra el modal
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
