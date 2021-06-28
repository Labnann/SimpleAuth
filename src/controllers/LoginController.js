const path = require('path');
const database = require('../database/database');

function show(request,response){
    response.sendFile(path.resolve(__dirname,'./../public/AdminLTE/AdminLTE/pages/examples/login-v2.html'));
}

let requestData;

function post(request,response){
    requestData = request.body;
    return  login(response);

}

function login(response){
    console.log("DB Checking");
    let sql = {}
    sql.query = "select * from users where email = ? and password = ?";
    sql.parameters = [requestData.email, requestData.password];
    return  processLogin(makeAsyncQuery(sql),response);


}

function processLogin(queryPromise,response){
    queryPromise.then((rows)=>{
        console.log(requestData);
        if(rows.length==1){
           return response.sendFile(path.resolve(__dirname,'./../public/AdminLTE/AdminLTE/index.html'));
        }
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