const path = require('path');

function show(request,response){
    response.sendFile(path.resolve(__dirname,'./../public/AdminLTE/AdminLTE/pages/examples/login-v2.html'));
}

function post(request,response){
    console.log(request.body);
    response.sendStatus(200);
}

module.exports = {show,post}