var mysql = require('mysql');
var http = require('http');
var print=require('./output');

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "MITTAL",
    database: "testnode"
});

con.connect(function(err) {
  if (err) throw err;
  con.query("SELECT * FROM formdata", function (err, result, fields) {
    if (err) throw err;
    console.log(result.length);
    let i=0;
    let st="";
    while (i<result.length) {
      st=st+result[i].name+" "+result[i].email+"<br>";
      i++;
    }
    // print.outputer(result[i].name+" "+result[i].email);
    print.outputer(st);
  });
});

// http.createServer(function (req, res) {
//   con.connect(function(err) {
//     if (err) throw err;
//     con.query("SELECT * FROM formdata", function (err, result, fields) {
//       if (err) throw err;
//       console.log(result);
//       res.write('File Uploaded');
//       res.end();
//     });
//   });

// }).listen(8080);