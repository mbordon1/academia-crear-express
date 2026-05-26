import * as modelo from './modelo.productos.mjs'; // las funciones que se declaren van a estar aca dentro 

 export async function obtenerTodos(req,res){ //asicnrona
    //obtenemos la consulta a bd desde la capa modelo
    // respuesta tien todos los datos de la consulta 
  const respuesta = modelo.obtenerTodos()

  const respuestaDatos = respuesta.rows //opconal pasarlo a capa vista

  // rows e sun arrelgo 
  
  res.json(respuestaDatos)
}


