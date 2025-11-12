import express from 'express';
import {MostrarCategorias,AñadirCategoria,ObtenersId,actualizaCategoria,eliminaCategorias} from '../controller/categoriasController.js'

const Router = express.Router();

Router.get('/',MostrarCategorias);
Router.post('/',AñadirCategoria);
Router.get('/categorias/:id',ObtenersId);
Router.put('/categorias/:id',actualizaCategoria);
Router.delete('/categorias/:id', eliminaCategorias);


export default Router;