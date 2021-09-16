const pool = require('../../bd')

class Person {
    // constructor(p_id, p_name, p_lastname) {
    constructor(cedula, nombre, apellido) {
        // this.cedula = p_id, //;
        // this.nombre = p_name, //;
        // this.apellido = p_lastname //;

        this.cedula = cedula, //;
        this.nombre = nombre, //;
        this.apellido = apellido //;
    }
    // describe() {
    //     return 'Person called '+this.nombre;
    // }
}

// async function obtenerCiudades( filtroCiudad ) {
async function obtenerClientes( filtroCliente ) {
    let resultado = null

    if (filtroCliente) {
        // resultado = await pool.query('SELECT * FROM ciudad WHERE nombre LIKE $1;', ['%' + filtroCiudad + '%'])
        resultado = await pool.query('SELECT * FROM public."Cliente" WHERE nombre LIKE $1;', ['%' + filtroCliente + '%'])
    
    } else {
        resultado = await pool.query('SELECT * FROM public."Cliente"')

        // SI no hay datos en la base...
        if(resultado.rows.length == 0) {

            /********************** Prueba 1 ******************************/

            // addClient( "0922514685", "Isaac", "O'Besso" )

            /********************* FIN PRUEBA 1 ***************************/

            

            /********************** Prueba 2 ******************************/

            // var query = 'INSERT INTO public."Cliente"(cedula, nombre, apellido) VALUES ($1, $2, $3)'
    
            // let response = await pool.query(query, ["0922514685", "Isaac", "O'Besso"])

            /********************* FIN PRUEBA 2 ***************************/


            // FUNCIONAAAAAAAAA
            /********************** Prueba 3 ******************************/
            
            // addClient( "0922514685", "Isaac", "O'Besso" )

            /********************* FIN PRUEBA 3 ***************************/



            /********************** Prueba 4 ******************************/
            
            var listaPersonas = [
                { nombre: "Isaac", apellido: "O'Besso", cedula: "0922514685", },
                { nombre: "npx", apellido: "nodemon", cedula: "0984516295", },
                { nombre: "Ray", apellido: "Gardner", cedula: "0987589641", },
            ];
        
            listaPersonas.forEach(function(element) {

                // addClient( element.cedula, element.nombre, element.apellido )

                const cliente = new Person (
                    cedula = element.cedula,
                    nombre = element.nombre,
                    apellido = element.apellido,
                )
        
                agregarCliente( cliente )

            });

            /********************* FIN PRUEBA 4 ***************************/

        }

    }

    return resultado.rows
}

async function addClient( cedula, nombre, apellido ) {
    var query = 'INSERT INTO public."Cliente"(cedula, nombre, apellido) VALUES ($1, $2, $3)'
    
    let resultado = await pool.query(query, [cedula, nombre, apellido])
    return resultado;
}


// async function agregarCiudad( ciudad ) {
async function agregarCliente( cliente ) {
    // let resultado = await pool.query('INSERT INTO ciudad(nombre, ref_pais) VALUES ($1, $2)', [ciudad.nombre, ciudad.pais])
    var query = 'INSERT INTO public."Cliente"(cedula, nombre, apellido) VALUES ($1, $2, $3)'
    
    let resultado = await pool.query(query, [cliente.cedula, cliente.nombre, cliente.apellido])
    return resultado;
}

async function actualizarCiudad( ciudad ) {
    // let resultado = await pool.query('UPDATE ciudad SET nombre = $1, ref_pais = $2 WHERE id_ciudad = $3', [ciudad.nombre, ciudad.pais, ciudad.id_ciudad])
    let resultado = await pool.query('UPDATE public."cliente" SET nombre = $1, ref_pais = $2 WHERE id_ciudad = $3', [ciudad.nombre, ciudad.pais, ciudad.id_ciudad])
    return resultado
}

// async function eliminarCiudad( ciudad ) {
async function eliminarCliente( ciudad ) {
    // let resultado = await pool.query('DELETE FROM ciudad WHERE id_ciudad = $1', [ciudad.id_ciudad])
    let resultado = await pool.query('DELETE FROM public."Cliente" WHERE cedula = $1', [ciudad.cedula])
    return resultado
} 



module.exports = {
    // obtener: obtenerCiudades,
    // agregar: agregarCiudad,
    // actualizar: actualizarCiudad,
    // eliminar: eliminarCiudad,

    
    obtener: obtenerClientes,
    agregar: agregarCliente,
    actualizar: actualizarCiudad,
    eliminar: eliminarCliente,
}