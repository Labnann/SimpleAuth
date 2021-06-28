const path = require('path');
const database = require('../database/database');


function show(request,response){
    response.sendFile(path.resolve(__dirname,'./../public/AdminLTE/AdminLTE/pages/examples/register-v2.html'));
}

function post(request,response){
    console.log(request.body);
    let person  = request.body;
    if(person.confirm == person.password)
       register([person.name,person.email,person.gender, person.password]);

}

register = (data) =>{
    let sql = {};
    sql.query = "Insert into users values(?,?,?,?)";
    sql.parameters = data;

    database.insert(sql);

}



module.exports = {show,post}