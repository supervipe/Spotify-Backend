var mysql = require('mysql');
module.exports = mysql.createConnection({
  host     : 'localhost',
  port     : 3306,
  user     : 'victor',
  password : '123456',
  database : 'spotify'
});
