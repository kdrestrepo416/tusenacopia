import Express from "express";
import bodyParser from "body-parser";
import indexrouter from "./router/index-router/index-router.js"
import funcionario from  "./router/controller-router/funcionario-router.js"
import funcionario_producto from "./router/controller-router/funcionario-producto-router.js"
import funcionario_semillero from "./router/controller-router/funcionario-semillero-router.js"
import producto from "./router/controller-router/producto-router.js"
import proyecto from "./router/controller-router/proyecto-router.js"
import puntaje from "./router/controller-router/puntaje-router.js"
import producto_proyecto from "./router/controller-router/producto-proyecto-router.js"
import semillero from "./router/controller-router/semillero-router.js"
import semillero_producto from "./router/controller-router/semillero-producto-router.js"
import semillero_proyecto from "./router/controller-router/semillero-proyecto-router.js"
import cors from "cors"
const app = Express()

app.use(Express.json())
app.use(indexrouter,funcionario,funcionario_producto,funcionario_semillero,producto,proyecto,puntaje,semillero,producto_proyecto,semillero_producto,semillero_proyecto)
const whiteList=['http://localhost:4000']
app.use(cors({origin:whiteList}))
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json());
app.use(indexrouter)

export default app;
