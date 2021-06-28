const sqlite3 = require('sqlite3').verbose();
const util = require('util');
let db = new sqlite3.Database("./database/SimpleAuth.db",(err)=>{console.log(err)});

function close(){
    db.close();
}


function query(sql){
    return new Promise(((resolve, reject) => {
        db.all(sql.query, sql.parameters,(err, rows) => {
            if (err) {
                reject(err);
            }
            else resolve(rows);
        });
    }))
}


 async function insert(sql){
    return new Promise(((resolve, reject) => {
        db.run(sql.query, sql.parameters,(err) => {
            if (err) {
                reject(err);
            } else {
                resolve(true);
                console.log('Inserted');
            }
        });
    }))

}



module.exports={query,close,insert};