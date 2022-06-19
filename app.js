const mysql = require('mysql');
var express = require("express");

var app = express();
var mysqlConnection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    database: "mydb",
});
app.listen(3300);
mysqlConnection.connect(function(err) {
    if (err) throw err;
   
    var sql = "CREATE TABLE registrationForm (name VARCHAR(255), address VARCHAR(255))";
    mysqlConnection.query(sql, function (err, result) {
      if (err) throw err;
      console.log("Table created");
    });
  });



