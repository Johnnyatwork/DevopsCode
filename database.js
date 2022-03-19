const { request } = require("express");
const mysql = require("mysql");

require('dotenv').config();

let connection = mysql.createConnection({
    host :process.env.DBHOST,
    port:process.env.DBPORT,
    user:process.env.DBUSERNAME,
    password:process.env.DBPASSWORD,
    database:process.env.DBNAME
    }
);


connection.connect((error)=>{
 if(error)
    console.log(error)
 else
    console.log("Connected to MySQL");
});

module.exports = { connection };

/*
connection.query("Select * from authors where id = 1",(error,results)=>{
    if(error)
        console.log(error)
    else
        console.log(results);
});*/

/*
connection.query("Select * from books",(error,results)=>{
    if(error)
        console.log(error)
    else
        console.log(results);
});*/