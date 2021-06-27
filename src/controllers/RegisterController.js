const path = require('path');

function show(request,response){
    response.sendFile(path.resolve(__dirname,'./../public/AdminLTE/AdminLTE/pages/examples/register-v2.html'));
}

function post(request,response){
    console.log(request.body);

}

module.exports = {show,post}