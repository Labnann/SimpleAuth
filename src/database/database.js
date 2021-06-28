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

promiseQuery = util.promisify(query);

module.exports={query,close,promiseQuery};