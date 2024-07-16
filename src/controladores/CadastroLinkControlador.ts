import { Request, Response } from "express";
import { adicionarDados, lerDados } from "../utils/arquivos";
import Link from "../modelos/link";

export default class CadastroLink {
  async controlador(req: Request, res: Response) {
    const { identificador, url } = req.body;

    if (!url || !identificador) {
      return res
        .status(400)
        .json({ mensagem: "A url e identificador são obrigatórios" });
    }

    const bancodedados = await lerDados();
    const existeLink = bancodedados.find((link) => {
      return link.identificador === identificador;
    });
    if (existeLink) {
      return res.status(400).json({ mensagem: "O link já exsite" });
    }

    const novoLink = new Link(identificador, url);
    await adicionarDados(novoLink);
    return res.status(201).json(novoLink);
  }
}
