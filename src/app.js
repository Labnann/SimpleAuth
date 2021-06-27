const express = require('express');
const path = require('path');
const router = require("./router/router");

let app = express();

app.listen(8888);

app.use(express.static('./public/AdminLTE/AdminLTE'));


app.use('/',router);


console.log("Hello World!");
