import {AñadirProductos, ObtenerProductos} from '../model/productoModel.js';

export const AñadirProducto=async(req,res)=>{
    try{
        const resultado = await AñadirProductos(req.body);
        res.status(200).json(resultado)
    }catch(error){
        console.error(error);
    }
}

export const MostrarProducto=async(req,res)=>{
    try{
        const resultado = await ObtenerProductos();
        res.status(200).json(resultado);    
    }catch(error){
        console.error(error);
    }    
}
export const ObtenersId=async(req,res)=>{
    try{
        const resultado = await ObtenerId(id);
        res.status(200).json(resultado);    
    }catch(error){
        console.error(error);
    } 
}
export const actualizaProductos = async (req, res) => {
    try {
        const resultado = await actualiza(req.params.id, req.body);
        res.json(resultado);
    } catch (error) {
        console.error(error);
    }
};