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
    let nome = req.query.NomeForm
    let email = req.query.EmailForm
    let mensagem = req.query.MensagemForm;

    alert("Obrigado" + nome + "por ter enviado a mensagem " + mensagem + ", retornaremos no email" + email + ".")
})

app.listen(3000, function () {
    console.log('Server is Running')
})