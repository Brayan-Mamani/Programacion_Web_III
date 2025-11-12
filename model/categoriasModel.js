import {db} from '../config/db.js';

export const ObtenerCategorias =async()=>{
  const [resultado] = await db.query('SELECT * FROM categorias')
  
    return resultado;
}

export const ObtenerId =async(id)=>{
  const [resultado] = await db.query('SELECT * FROM categorias WHERE id = ?'[id])
    return resultado;
}

export const AñadirCategorias =async(categorias)=>{
  const {nombre,descripcion}= categorias;
  await db.query('INSERT INTO categorias (nombre, descripcion) VALUES (?,?)',[nombre,descripcion] )
  
    return {message:"Se inserto correctamente"};
}
export const actualiza = async (id, categorias) => {
  const { nombre, precio } = categorias;
  await db.query('UPDATE categorias SET nombre = ?, descripcion = ? WHERE id = ?'[nombre,descripcion])
  return {id,...categorias}
}
export const elimina = async (id) => {
  await db.query('DELETE FROM categorias WHERE id=?' , [id]);
  return id;
};

