const express = require('express');
const {urlencoded} = require('express');
const dotenv = require('dotenv').config();
const PORT = process.env.PORT || 5050
const connect = require('./config/database')

connect()
const app = express()

app.use(express.json());
app.use(urlencoded({extended: false}));

app.use('/', require('./routes/userRoutes'))
app.listen(PORT, () => {
console.log(`Server is running on Port ${PORT}`);
})