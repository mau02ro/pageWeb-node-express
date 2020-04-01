const express = require('express');
const app = express();
const path = require('path');

//settings
app.set('port', 3000);
app.set('views', path.join(__dirname, 'views'));//indicar donde estan las vistas
app.engine('html', require('ejs').renderFile)//motor de plantillas entienda html
app.set('view engine', 'ejs');//motor de plantillas

//middlewares


//routes
app.use(require('./routes/'));

//static files
app.use(express.static(path.join(__dirname, 'public')))

//listening the serer
app.listen(app.get('port'), ()=>{
    console.log(`Server on port: ${app.get('port')}`);
})