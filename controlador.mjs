// Consulta todos los productos desde PostgreSQL


import pg from '../../database/conexion.mjs'

export async function obtenerProductos(req, res) {

    try {

        const respuesta = await pg.query('SELECT * FROM productos')

        res.json(respuesta.rows)

    } catch (error) {

        res.status(500).json({
            error: error.message
        })

    }

}