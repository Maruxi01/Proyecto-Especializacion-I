const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require('body-parser');

const path = require('path');
require("dotenv").config({ path: path.resolve(__dirname, './.env') });

const cors = require("cors");

const app = express();

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json()) // parse application/json


app.set("port", process.env.PORT || 3000);



mongoose.connect(process.env.MONGODB_URI, {
  
});

app.use(cors());

app.use('/',require('./routes'));

app.listen(app.get('port'),function() {
  console.log(`App running at: http://localhost:${app.get('port')}`);
});

module.exports = app;