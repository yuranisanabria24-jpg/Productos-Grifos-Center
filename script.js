let productos = []

function agregarProducto(){

let nombre = document.getElementById("nombre").value
let precio = document.getElementById("precio").value

let producto = {
nombre: nombre,
precio: precio
}

productos.push(producto)

mostrarProductos()

}

function mostrarProductos(){

let lista = document.getElementById("lista")

lista.innerHTML = ""

productos.forEach((producto, index) => {

lista.innerHTML += `
<li>
${producto.nombre} - $${producto.precio}
<button onclick="editarProducto(${index})">Editar</button>
<button onclick="eliminarProducto(${index})">Eliminar</button>
</li>
`

})

}

function editarProducto(index){

let nuevoNombre = prompt("Nuevo nombre")
let nuevoPrecio = prompt("Nuevo precio")

productos[index].nombre = nuevoNombre
productos[index].precio = nuevoPrecio

mostrarProductos()

}

function eliminarProducto(index){

productos.splice(index,1)

mostrarProductos()

}