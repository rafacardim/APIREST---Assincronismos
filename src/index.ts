import 'dotenv/config'

import express from 'express'

const app = express()

app.use(express.json())

app.get('/', (req, res) => {
    return res.json("tudo certo")
})

app.listen(process.env.PORT, () => {
    console.log('Servidor inicializado')
})