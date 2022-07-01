const mysql=require("mysql");


let mysqlConnection=mysql.createConnection(
    {
       host:"localhost",
       user:"root",
       password:"password",
       database:"demodb"

    }
)

mysqlConnection.connect(function(err){
    if(err){
        throw err;
    }
    console.log("Connected");
})
module.exports=mysqlConnection;
