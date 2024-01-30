var http = require('http');
var formidable = require('formidable');
const nodemailer = require('nodemailer');
var fs = require('fs');
var print=require('./output');

let mailTransporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'extremecoder2002@gmail.com',
        pass: 'Coder#2907'
    }
});

let mailDetails = {
    from: 'extremecoder2002@gmail.com',
    to: 'vivaanmittal2002@gmail.com',
    subject: 'Test mail',
    text: 'Node.js testing mail'
};
  

http.createServer(function (req, res) {
    
    fs.readFile('main.html',function(err,data){

        if(err){
            return console.error(err);
        }
        if (req.url == '/fileupload') {
            var form = new formidable.IncomingForm();
            form.parse(req, function (err, fields, files) {
              var oldpath = files.UpFile.path;
              var newpath = 'C:/Users/Vivaan/Data/MRU/3rd Sem/UI-2/LAB/28SEP2021/Location/' + files.UpFile.name;
              fs.rename(oldpath, newpath, function (err) {
                if (err) throw err;
                res.write('File Uploaded');
                res.end();
              });
         });} 
         
         
         else{
             if(req.url=='/FORM.html'){
                fs.readFile('FORM.html',function(err2,data2){
                    if(err){
                        return console.error(err2);
                    }
                    else {
                        res.writeHead(200, {'Content-Type': 'text/html'});
                        res.write(data2);            
                        return res.end();
                    }

                });
            }
            else{
                if(req.url=='/casestudy.html'){
                    fs.readFile('casestudy.html',function(err1,data1){
                        if(err){
                            return console.error(err1);
                        }
                        else {
                            res.writeHead(200, {'Content-Type': 'text/html'});
                            res.write(data1);            
                            return res.end();

                        }

                    });
                }

                else{
                    if(req.url=='/contact.html'){
                        mailTransporter.sendMail(mailDetails, function(err, data) {
                            if(err) {
                                console.log('Error Occurs',err);
                            } else {
                                console.log('Email sent successfully');
                                return res.end();
                            }
                        });
                    }

                    else{
                        if(req.url=='/Cal.html'){
                            fs.readFile('C:/Users/Vivaan/Data/MRU/3rd Sem/UI-2/LAB/LAB-3/Q6.html',function(err1,data1){
                                if(err){
                                    return console.error(err1);
                                }
                                else {
                                    res.writeHead(200, {'Content-Type': 'text/html'});
                                    res.write(data1);            
                                    return res.end();
                                }
        
                            });
                        }

                        else {
                            res.writeHead(200, {'Content-Type': 'text/html'});
                            res.write(data);            
                            return res.end();
                        }
                    }

                    
                }
            }
         }
         

         

         

    });

  }).listen(8080);