// requires
const mysql = require("mysql");

// module variables
const config = require('./config.json');

const env = config.development;
console.log("Connecting to: " + env.host);
const connection = mysql.createConnection({

  host: env.host,
  port: env.port,
  user: env.user,
  password: env.password,
  database: env.database,
  timeout: 60000,

});

connection.connect(err=> {
  if(err){
    console.log("DB connection failed: " + err.message);
    return;
  }
  console.log("Database connected.");
});
