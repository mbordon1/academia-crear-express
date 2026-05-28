import { Router } from 'express'
import {obtenerClases,obtenerClasesPorNivel,obtenerClasePorId,crearClase,actualizarClase,eliminarClase,} from './controlador.clases.mjs'

const router = Router()

/**
 * @swagger
 * /api/clases:
 *   get:
 *     summary: Obtiene todas las clases
 *     tags:
 *       - Clases
 *     responses:
 *       '200':
 *         description: Lista de clases
 *       '500':
 *         description: Error interno del servidor
 */
router.get('/',               obtenerClases)

/**
 * @swagger
 * /api/clases/nivel/{nivel}:
 *   get:
 *     summary: Obtiene clases filtradas por nivel
 *     tags:
 *       - Clases
 *     parameters:
 *       - in: path
 *         name: nivel
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       '200':
 *         description: Lista de clases del nivel indicado
 *       '500':
 *         description: Error interno del servidor
 */
router.get('/nivel/:nivel',   obtenerClasesPorNivel)

/**
 * @swagger
 * /api/clases/{id}:
 *   get:
 *     summary: Obtiene una clase por id
 *     tags:
 *       - Clases
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       '200':
 *         description: Clase encontrada
 *       '404':
 *         description: Clase no encontrada
 *       '500':
 *         description: Error interno del servidor
 */
router.get('/:id',            obtenerClasePorId)

/**
 * @swagger
 * /api/clases:
 *   post:
 *     summary: Crea una clase
 *     tags:
 *       - Clases
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - nombre
 *             properties:
 *               nombre:
 *                 type: string
 *               descripcion:
 *                 type: string
 *               nivel:
 *                 type: string
 *     responses:
 *       '201':
 *         description: Clase creada
 *       '400':
 *         description: Datos invalidos
 *       '500':
 *         description: Error interno del servidor
 */
router.post('/',              crearClase)

/**
 * @swagger
 * /api/clases/{id}:
 *   put:
 *     summary: Actualiza una clase por id
 *     tags:
 *       - Clases
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nombre:
 *                 type: string
 *               descripcion:
 *                 type: string
 *               nivel:
 *                 type: string
 *     responses:
 *       '200':
 *         description: Clase actualizada
 *       '404':
 *         description: Clase no encontrada
 *       '500':
 *         description: Error interno del servidor
 */
router.put('/:id',            actualizarClase)

/**
 * @swagger
 * /api/clases/{id}:
 *   delete:
 *     summary: Elimina una clase por id
 *     tags:
 *       - Clases
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       '200':
 *         description: Clase eliminada
 *       '404':
 *         description: Clase no encontrada
 *       '500':
 *         description: Error interno del servidor
 */
router.delete('/:id',         eliminarClase)

export default router
