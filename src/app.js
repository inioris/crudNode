'use strict';

const express = require('express'); //frameword de node js para trabajar mas rapido
const path = require('path'); //para unir directorios
const morgan = require('morgan'); //esto es para los middleware
const mysql = require('mysql');
const myConnection = require('express-myconnection');
const app = express();

//importing routes
const customersRouter = require('./routes/customers.js');

//settings
app.set('port', process.env.PORT || 3000);

//views
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

//middlewares
app.use(morgan('dev'));
app.use(myConnection(mysql,{
	host: 'localhost',
	user: 'root',
	password: '',
	port: '3306',
	database: 'crudnode'
},'single'));
//esto es un metodo de seguridad para recibir los datos encode
app.use(express.urlencoded({extended: false}));

//routes
app.use('/', customersRouter);

//static File
app.use(express.static(path.join(__dirname, 'public')));

//Starting the server
app.listen(app.get('port'), () => {
	console.log('Server on port 3000');
});