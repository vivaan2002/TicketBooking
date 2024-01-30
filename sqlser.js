var http = require('http');
var formidable = require('formidable');
var fs = require('fs');
// const nodemailer = require('nodemailer');
// var mysql = require('mysql');
var mailsend = require('./mailer');
var sqladder = require('./sqlop');


//mysql
// var con = mysql.createConnection({
//   host: "localhost",
//   user: "root",
//   password: "MITTAL",
//   database: "testnode"
// });
//mysql


//Mail
// let mailTransporter = nodemailer.createTransport({
//   service: 'gmail',
//   auth: {
//       user: 'extremecoder2002@gmail.com',
//       pass: 'Coder#2907'
//   }
// });
//Mail


http.createServer(function (req, res) {

    fs.readFile('FORM.html',function(err,data){

        if(err){
            return console.error(err);
        }
        if (req.url == '/fileupload') {
            var form = new formidable.IncomingForm();
            form.parse(req, function (err, fields, files) {
              console.log('fields:', fields);


              //File System
              var content="\nNew Data\nUsername:-"+fields.Username+"\nEmail:-"+fields.email+"\nPassword:-"+fields.password+"\nPhone Number:-"+fields.phone_number+"\nZip Code:-"+fields.ZipC+"\nCountry:-"+fields.Country+"\nAge:-"+fields.Age+"\nAdd:-"+fields.Add+"\n\n\n";
              fs.appendFile('result.txt',content, err => {
                  if (err) {
                    console.error(err)
                    return
                  }
                  console.log('Witten Sussfully');
              });
              //File System


              //Mail
              // let mailDetails = {
              //     from: 'extremecoder2002@gmail.com',
              //     to: fields.email,
              //     subject: 'Test mail',
              //     text: content
              // };
              mailsend.mailsender(fields.email,"Module Test",content);
              // mailTransporter.sendMail(mailDetails, function(err, data) {
              //     if(err) {
              //         console.log('Error Occurs',err);
              //     } else {
              //         console.log('Email sent successfully');
              //     }
              // });


              //Mail
              var oldpath = files.UpFile.path;
              var newpath = 'C:/Users/Vivaan/Data/MRU/3rd Sem/UI-2/LAB/Final Project/loc/' + files.UpFile.name;
              fs.rename(oldpath, newpath, function (err) {
                if (err) throw err;
                res.write('File Uploaded');
                res.end();
              });

              //MySql

              var sqlqa = "INSERT INTO formdata (name,email,pass,phn,zipc,country,age,addr) VALUES ('"+fields.Username+"','"+fields.email+"','"+fields.password+"',"+fields.phone_number+","+fields.ZipC+",'"+fields.Country+"',"+fields.Age+",'"+fields.Add+"')";
              sqladder.serop(sqlqa);

              // con.connect(function(err) {
              //   if (err) throw err;
              //   console.log("Connected!");
              //   var emailid=fields.email;
              //   con.query(sql, function (err, result) {
              //     if (err) throw err;
              //     console.log("1 record inserted");
              //   });
              // });

              //MySql


         });
          } else {
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.write(data);            
            return res.end();
          }

    });

  }).listen(8080);