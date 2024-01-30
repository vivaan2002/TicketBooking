var http = require('http');
var fs = require('fs');

exports.outputer = function (data) {
    http.createServer(function (req, res) {

        fs.readFile('admin.html',function(err1,data1){
            if(err1){
                return console.error(err1);
            }
            else {
                res.writeHead(200, {'Content-Type': 'text/html'});
                res.write("<br><br>");                
                res.write(data1);
                res.write(data);
                res.end();

            }

        });
      }).listen(8080); 
 };

// exports.outputer = function (data) {
//     http.createServer(function (req, res) {

//         res.write(data); 
//         res.end(); 
//       }).listen(8080); 
//  };