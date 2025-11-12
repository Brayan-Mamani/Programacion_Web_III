import express from 'express';
import {añadirProducto} from '../controller/productoControllers'

const Router = express.Router();


Router.post('/',añadirProducto);



export default Router;