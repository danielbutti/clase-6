
/*
const express = require('express');
const app = express()
const puerto = 8080

app.get(`/`, (req, res) => {
    res.send(`hola soy home`)
})

app.get(`/user/:id/:nombre`, (req, res) => {
    const id = req.params.id
    res.send(`Hola soy user: ${id} ${nombre}`)
})

app.post(`/productos`)

app.listen(puerto, () =>{
    console.log(`El servidor se inicia en el puerto ${puerto}`)
});*/

const express = require('express')
const app = express()
const puerto = 8080 
let visitas = 0

app.use((req, res, next) => {
    visitas++
    next()
})

app.get(`/`, (req, res) => { 
    res.send(`<h1 styles="color: blue">Bienvenido al servidor de express</h1>`)
})

app.get(`/visitas`, (req, res) => {
    res.send(`El servidor tuvo ${visitas} visitas`)
})

app.use((req, res, next) => {
    console.log(`Yendo a FYH`)
    next()
})

app.get(`/fyh`, (req, res) => {
    const date = new Date(req.params.date)
    res,JSON({fyh: date})
})
app.listen(puerto, (error) =>{
    if(!error) {
        console.log(`Servidor escuchando el pouerto ${puerto}`)
    }else{
        console.log(`Hubo un error al iniciar el servidor`)
    }
})