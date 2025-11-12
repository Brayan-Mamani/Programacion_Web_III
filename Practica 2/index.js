import categoriasRouter from './routers/categoriasRouter.js'
import express from 'express';

const app = express();
app.use(express.json());
app.use('/categorias', categoriasRouter);

const PORT =3005;
app.listen(PORT,()=>{
    console.log(`Corriendo en http://localhost:${PORT}`);
})