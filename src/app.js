const express = require('express');

const router = require("./router/router");

let app = express();

app.listen(8888);

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use('/',router);
app.use(express.static('./public/AdminLTE/AdminLTE'));




console.log("Hello World!");
