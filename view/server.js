const express = require('express')
const app = express()
app.get('/Home', function (req, res) {
    res.sendFile(__dirname + "/index.html")
})

app.get('/Contato', function (req, res) {
    res.sendFile(__dirname + "/contato.html")
})

app.get('/Sobre', function (req, res) {
    res.sendFile(__dirname + "/sobre.html")
})


app.get('/Confirmacao', function (req, res) {
    console.log(req.query.NomeForm)
    console.log(req.query.EmailForm)
    console.log(req.query.MensagemForm)
})

app.listen(3000, function () {
    console.log('Server is Running')
})