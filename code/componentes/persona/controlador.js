const datos = require('./almacenamiento')

// function obtenerCiudades( filtroCiudad ) {//obtenerClientes
function obtenerClientes( filtroCliente ) {
    return new Promise((resolve, reject) => {
        resolve( datos.obtener( filtroCliente ) )
    })
}

// function agregarCiudad( ciudad ) {
function agregarCliente( cliente ) {
    return new Promise((resolve, reject) => {
        datos.agregar( cliente )
        resolve( cliente )
    })
}

function actualizarCiudad( ciudad ) {
    return new Promise((resolve, reject) => {
        datos.actualizar( ciudad )
        resolve( ciudad )
    })
}

// function eliminarCiudad( ciudad ) {
function eliminarCliente( cliente ) {
    return new Promise((resolve, reject) => {
        datos.eliminar( cliente )
        resolve( cliente )
    })
}

module.exports = {
    obtenerClientes,
    agregarCliente,
    actualizarCiudad,
    eliminarCliente,
}