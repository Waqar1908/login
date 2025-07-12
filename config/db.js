const mysql = require('mysql2');

const db=mysql.createConnection(
    {
        host:"localhost",
        user:"root",
        password:"Waqar@1311",
        database:"beltcart"
    });
    
    db.connect(err=>{
        if(err) throw  err;
        console.log("mysql is connected");
        
    })

    module.exports=db;