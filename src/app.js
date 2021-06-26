const express = require('express');
const path = require('path');
let app = express();

app.listen(8888);

app.use(express.static('./AdminLTE'));

app.get( '/login',(request,response)=>{
   response.sendFile(path.resolve(__dirname,'./AdminLTE/pages/examples/login.html'));
})


console.log("Hello World!");
