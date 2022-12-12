const express = require('express')
const hbs = require("hbs");
require("dotenv").config()

const app = express()
const port = process.env.PORT;



//aca le decimos a express que quiero renderizar con handlebars hbs
app.set("view engine", "hbs");
//uso de partials
hbs.registerPartials(__dirname + "/views/partials");

//Servir contenido estatico
app.use( express.static("public")); //midleware
//con esto la ruta publica tiene prioridad y se ejecuta en lugar de las funciones de abajo

app.get('/', (req, res) => {
    res.render("home",{
        nombre: "Rodri",
        titulo : "Curso Node"
    });
})

app.get('/generic', (req, res) => {
    res.render("generic",{
        nombre: "Rodri",
        titulo : "Curso Node"
    });
})

app.get('/elements', (req, res) => {
    res.render("elements",{
        nombre: "Rodri",
        titulo : "Curso Node"
    });
})

//Se podria servir cualquier contenido estatico imagenes etc
app.get('*', (req, res) => {
    res.sendFile(__dirname + '/public/404.html')
})

app.listen(port)