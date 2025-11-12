import {db} from '../config/db.js';
export const AñadirProductos =async(producto)=>{
  const {nombre,descripcion}= producto;
  await db.query('INSERT INTO productos (nombre, precio, stock, categoria_id)VALUES (?, ?, ?, ?)',[nombre, precio, stock, categoria_id])
  
    return {message:"Se inserto correctamente"};
}