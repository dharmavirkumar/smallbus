require('dotenv').config();// Load environment variables from .env file

const express = require('express');
const route = require("./route/User")
const mongoose = require('./model/db'); 

 
const app = express();

app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'))

const port = process.env.PORT || 3000;

app.use("/",route)

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});