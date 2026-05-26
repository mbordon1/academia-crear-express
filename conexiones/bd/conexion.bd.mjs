import pg from 'pg'
 //hacer consultas simples

 const pool = new pg.Pool({
    host: 'localhost',
    user: 'root',
    password: 'pass',
    database: 'crear',
    port: 5432
 })

 //exportamos para hacerlo vicible desde otro modulo
 //default es nonombrado -- > se importa en las llaves
 export default pool