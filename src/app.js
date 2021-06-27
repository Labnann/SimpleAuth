const express = require('express');

const router = require("./router/router");

let app = express();

app.listen(8888);

app.use(express.json());
app.use(express.urlencoded());
app.use(express.static('./public/AdminLTE/AdminLTE'));


app.use('/',router,express.json());


console.log("Hello World!");
