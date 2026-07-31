const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: 'database-1.cb4qcukg4sov.ap-south-1.rds.amazonaws.com',
    user: 'admin',
    password: '12345678',
    database: 'users'
});

connection.connect(function(err){
    if(err){
        console.log(err);
    }else{
        console.log("Connected to AWS RDS");
    }
});

module.exports = connection;
