// Connection with the DB

const mysql = require('mysql');
let connection = mysql.createConnection({
    port:3306,
    host:"localhost",
    user:"root",
    password:"",
    database:"backendwebprojectnodejs"
})

connection.connect((err)=>{
    if (!err) 
    {
        console.log("Connected to database.");
    }
    else
    console.log(err);
})