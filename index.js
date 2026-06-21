const express = require("express")
require("dotenv").config
const path = require("path")
const jwt = require("jsonwebtoken")
const app = express()
const SECRET = process.env.SECRET
app.use(express.json())
app.use(express.static('public'))

app.post("/Login", (req, res) => {
    const {name, password} = req.body
    const Gerando_Token = jwt.sign({name, password}, SECRET,{expiresIn:"1h"})
})

const Autenticação = (req, res, next) => {
    const auther = req.headers["authorization"]
    const token = autherHeader && autherHeader.split(" ")[1]

    jwt.verify(token, SECRET, (err,user) => {
        if(err){
            return res.json("Token invalido")
        }else{
            req.user = user
            next()
        }
    })
}

app.get("/nãosei",Autenticação, (req, res) => {
    res.sendFile(path.join(__dirname, "public", "Index.html"))
})