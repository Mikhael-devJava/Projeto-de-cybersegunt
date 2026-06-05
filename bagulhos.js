const express = require("express");
const app = express()
app.use(express.json())
let compras = [{
    id: 0,
    nome : "macarão"
}]

app.get("/Carrinho", (req, res) => {
    res.json(compras)
})

app.get("/Carrinho/:id", (req, res) => {
    const id = parseInt(req.params.id)
    const ver = compras.find(u => u.id === id)
    if (!ver){
        res.send("Item n encontrado!")
    } else {
        res.json(ver)
    }
}) 

app.post("/Carrinho", (req, res) => {
    const nome = req.body.nome
    const id = req.body.id
    compras.push({id: id, nome: nome})
    res.send("O produto foi adicionado no carrinho!")
})

app.put("/Carrinho/:id", (req, res) => {
    const id_atual = parseInt(req.params.id)
    const verificar = compras.find(u => u.id === id_atual)
    if (!verificar){
        res.send("Id n encontrado!")
    }else{
        const nome_atual = req.body.nome
        verificar.nome = nome_atual
        res.json("Produto trocado com sucesso!")
    }
})

app.delete("/Carrinho/:id", (req, res) => {
    const id_delet =  parseInt(req.params.id) 
    const verifi = compras.findIndex(u => u.id === id_delet)
    if (verifi === -1){
        res.send("O produto n foi encontrado!")
    } else{
        compras.splice(verifi, 1)
        res.json("O produto foi excluido!")
    }
})

app.listen(3000, () => {
    console.log("Serve rodando http://localhost:3000/Carrinho")
})