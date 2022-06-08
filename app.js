const path = require('path');
const express = require ("express");
const app = express();
const port = process.env.PORT || 3000;

// template engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, './src/views'));

//routes
app.use("/", require ("./src/routes/index.routes"));

//archivos estáticos
app.use(express.static("public"))

//server
app.listen(port, (req, res) =>{
    console.log(`corriendo en el puerto ${port}`)
});