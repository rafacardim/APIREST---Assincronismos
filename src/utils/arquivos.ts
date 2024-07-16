import fs from 'fs/promises'
import Link from '../modelos/link'

const caminhoBancoDeDados = 'src/bancodedados.json'

export async function lerDados(): Promise<Link[]>{
const dados = await fs.readFile(caminhoBancoDeDados)
const parse = JSON.parse(dados.toString())
return parse
}

export async function adicionarDados(link: Link){
    const dados = await lerDados()
dados.push(link)
await fs.writeFile(caminhoBancoDeDados, JSON.stringify(dados, null, '\t'))
    }