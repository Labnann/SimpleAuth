const path = require("path");
const database = require ("../database/database");
const bcrypt = require("bcrypt");

function show(request,response){
    response.sendFile(path.resolve(__dirname,'./../public/AdminLTE/AdminLTE/pages/examples/register-v2.html'));
}

function post(request,response){
    console.log(request.body);
    let person  = request.body;
    if(person.confirm == person.password) {
        bcrypt.hash(person.password, 2, function(err, hash) {
            register([person.name,person.email,person.gender, hash]);
        });
    }

}

register = (data) =>{
    let sql = {};
    sql.query = "Insert into users values(?,?,?,?)";
    sql.parameters = data;
    database.insert(sql);
}



module.exports = {show,post}