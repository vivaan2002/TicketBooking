var mysql = require('mysql');
var fs = require('fs');

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "MITTAL",
    database: "testnode"
});

var con1 = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "MITTAL",
    database: "testnode"
});

exports.serop=function(sql){
    con.connect(function(err) {
        if (err) throw err;
        console.log("Connected!");
        con.query(sql, function (err, result) {
          if (err) throw err;
          console.log("Sql Oppration Performed");
        });
    });
}

exports.serop1=function(sql1){
    con1.connect(function(err1) {
        if (err1) throw err1;
        console.log("Connected!");
        con.query(sql1, function (err2, result) {
          if (err2) throw err2;
          console.log("Sql Oppration Performed");
        });
    });
}

exports.bookingfetcher=function () {
    let st="";
    con.connect(function(err) {
        if (err) throw err;
        con.query("SELECT * FROM booking", function (err, result, fields) {
          if (err) throw err;
          console.log(result.length);
          let i=0;
          while (i<result.length) {
            st=st+"<br><br><b><u>Booking Number "+(i+1)+":-</u></b><br>Name:-"+result[i].name+"<br>Email Id:-"+result[i].email+"<br>Phone Number:-"+result[i].phno+"<br>Gender:-"+result[i].gender+"<br>Age:-"+result[i].age+"<br>Address:-"+result[i].addr+"<br>Zip Code:-"+result[i].zipc+"<br>Id Proof:-"+result[i].idproof+"<br>Destination:-"+result[i].dest+"<br>Booking Id:-"+result[i].bookid;
            i++;
          }
          fs.writeFile('bookingdata.txt', st, function (err) {
            if (err) throw err;
            console.log('Saved!');
          });
        });
      });
}

exports.cancelfetcher=function () {
    let st="";
    con1.connect(function(err) {
        if (err) throw err;
        con.query("SELECT * FROM cancel", function (err, result, fields) {
          if (err) throw err;
          console.log(result.length);
          let i=0;
          while (i<result.length) {
            st=st+"<br><br><b><u>Cancelation Number "+(i+1)+":-</u></b><br>Cancelation Id:-"+result[i].cancel_id+"<br>Booking Id:-"+result[i].bookid+"<br>";
            i++;
          }
          fs.writeFile('canceldata.txt', st, function (err) {
            if (err) throw err;
            console.log('Saved!');
          });
        });
      });
}
