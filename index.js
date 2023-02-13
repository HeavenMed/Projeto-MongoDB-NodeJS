//Vamos instalar o driver do MongoDB , que é um pacote de npm
// npm install mongodb
const express = require('express');
const exphbs = require('express-handlebars');
const path = require('path')

const app = express();

const conn = require("./db/conn")
//Importando Rotas
const productsRoutes = require('./routes/productsRoutes')

//Handlebars====================================================
app.set('view engine' , 'handlebars')                       // =
app.set('views', path.join(__dirname, 'views'));            // =
app.engine('handlebars' , exphbs.engine({                   // =
    extname:'handlebars' ,                                  // =
    defaultLayout : 'main' ,                                // =
    layoutsDir:  path.join(__dirname + '/views/layouts'),   // =
}))                                                         // =
                                                            // =
// Config a pasta Public                                    // =
app.use(express.static(__dirname + '/public'));             // =
//Receber Respostas do Body                                 // =
app.use(                                                    // =
    express.urlencoded({                                    // =
        extended:true                                       // =
    })                                                      // =
)                                                           // =
app.use(express.json())                                     // =
//==============================================================



app.use('/products' , productsRoutes)

app.listen(3000)

//falta 37:10