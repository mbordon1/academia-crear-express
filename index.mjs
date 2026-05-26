import express from 'express';

//importar las rutas del modulo productos
import rutasModuloProductos from './modulos/productos/rutas.productos.mjs';



import path from 'path';
import { fileURLToPath } from 'url';

import clasesRoutes from './routes/clases.routes.mjs';

const app = express();

//le avisamos a express que use las rutas del modulo pñroductos
app.use(rutasModuloProductos);

const PUERTO = 2026;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.json());
app.use(express.static(__dirname + '/front'));

app.use('/api/clases', clasesRoutes);

app.listen(PUERTO, () => {
    console.log(`Servidor en http://localhost:${PUERTO}`);
});

