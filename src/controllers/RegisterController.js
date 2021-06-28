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
            const hashedPassword = bcrypt.hashSync(person.password,2);
            register([person.name,person.email,person.gender, hashedPassword],response);
    }
    else response.redirect('/register');

}

register = (data,response) =>{
    let sql = {};
    sql.query = "Insert into users values(?,?,?,?)";
    sql.parameters = data;

        database.insert(sql).catch(()=>{
            response.redirect("/register");
        }).then(  ()=>{response.redirect("/login")})
}



module.exports = {show,post}