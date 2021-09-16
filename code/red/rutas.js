const ciudad = require('../componentes/ciudad/interfaz')
const pais = require('../componentes/pais/interfaz')
const persona = require('../componentes/persona/interfaz')

const rutas = function(servidor) {
    servidor.use('/ciudad', ciudad)
    servidor.use('/pais', pais)
    servidor.use('/persona', persona)
}

module.exports = rutas