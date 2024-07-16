import { Router } from "express";
import CadastroLink from "./controladores/CadastroLinkControlador";
import ObterLink from "./controladores/ObterLinkControlador";

const rotas = Router();

rotas.post("/", new CadastroLink().controlador);
rotas.get("/:identificador", new ObterLink().controlador);

export default rotas;
