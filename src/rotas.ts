import { Router } from "express";
import CadastroLink from "./controladores/CadastroLinkControlador";

const rotas = Router()

rotas.post('/', new CadastroLink().controlador)
rotas.get('/:identificador')

export default rotas