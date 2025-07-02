const express = require('express');
const app = express();
 const mongoose = require('mongoose');
 const dotenv = require('dotenv');

 //importar rutas
const authRoute = require('./routes/auth');

 dotenv.config();

 //conectar a la BdD
 const start = async() => {
    try {
        await mongoose.connect(process.env.DB_CONNECT);
        console.log('Conectado a BD');
    } catch (err) {
        console.error('Error al conectar la BD',err);
    }
 }
 start();
//  mongoose.connect(
//     'mongodb+srv://adalbertovazquezp:muNRZMZW7Tc0p2A6@bugglesdb.d0otolg.mongodb.net/');
//     mongoose.then(() => console.log("conectando a BdD"))
//     mongoose.catch((err) => console.error("error al conectar",err));

//middleware
app.use(express.json());
//route Middleware
app.use('/api/user', authRoute);

app.listen(3000, ()=> console.log('Server up and running'));
