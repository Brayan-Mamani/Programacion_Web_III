import {ObtenerCategorias,AñadirCategorias,ObtenerId,actualiza} from '../model/categoriasModel.js';


export const MostrarCategorias=async(req,res)=>{
    try{
        const resultado = await ObtenerCategorias();
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

export const AñadirCategoria=async(req,res)=>{
    try{
        const resultado = await AñadirCategorias(req.body);
        res.status(200).json(resultado)
    }catch(error){
        console.error(error);
    }
}
export const actualizaCategoria = async (req, res) => {
    try {
        const resultado = await actualiza(req.params.id, req.body);
        res.json(resultado);
    } catch (error) {
        console.error(error);
    }
};

