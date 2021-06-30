const path = require('path');
const database = require('../database/database');
const bcrypt = require('bcrypt');
const fs = require('fs');

function show(request,response){
    response.sendFile(path.resolve(__dirname,'./../public/AdminLTE/AdminLTE/pages/examples/login-v2.html'));
}

let loginCredentials;

function post(request,response){
    loginCredentials = request.body;
    return  login(response);

}

function login(response){
    console.log("DB Checking");
    let sql = {}
    sql.query = "select * from users where email = ?";
    sql.parameters = [loginCredentials.email];
    return  processLogin(makeAsyncQuery(sql),response);

}

function makeLogin(response, rows) {
    fs.readFile(path.resolve(__dirname, './../views/dashboard.html'),((err, data) => {
        let toSend = data.toString().replace("/*$$RESPONSE_DATA$$*/",`let username = "${rows[0].name}"`);
        return response.send(toSend);
    }))

}

function processLogin(queryPromise,response){

    queryPromise.then((rows)=>{
        console.log(loginCredentials);
        if(rows[0]!=null) {
            if(bcrypt.compareSync(loginCredentials.password,rows[0].password))
            return makeLogin(response, rows);
        }
        else return response.redirect('/login');
    });
}


const makeAsyncQuery = async (sql)=>{
    try {
        const first = await database.query(sql);
        return first;
    }
    catch (err){
        throw err;
    }

}

module.exports = {show,post}