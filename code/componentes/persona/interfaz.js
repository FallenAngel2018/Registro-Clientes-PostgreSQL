const express = require('express')
const respuesta = require('../../red/respuestas')
const controlador = require('./controlador')

const ruta = express.Router()

ruta.get('/', function(req, res) {
    // const filtroCiudad = req.query.ciudad || null
    // controlador.obtenerCiudades( filtroCiudad )

    const filtroCliente = req.query.cedula || null
    controlador.obtenerClientes( filtroCliente )
        .then((data) => {
            respuesta.exito(req, res, data, 200)
        })
        .catch((error) => {
            respuesta.error(req, res, error, 500)
        })
})

ruta.post('/', function(req, res) {
    // controlador.agregarCiudad( req.body )
    controlador.agregarCliente( req.body )
        .then((data) => {
            respuesta.exito(req, res, data, 200)
        })
        .catch((error) => {
            respuesta.error(req, res, error, 500)
        })
})

ruta.patch('/', function(req, res) {
    controlador.actualizarCiudad(req.body)
        .then((data) => {
            respuesta.exito(req, res, data, 200)
        })
        .catch((error) => {
            respuesta.error(req, res, error, 500)
        })
})

ruta.delete('/', function(req, res) {
    // controlador.eliminarCiudad(req.body)
    controlador.eliminarCliente(req.body)
        .then((data) => {
            respuesta.exito(req, res, data, 200)
        })
        .catch((error) => {
            respuesta.error(req, res, error, 500)
        })
})

module.exports = ruta