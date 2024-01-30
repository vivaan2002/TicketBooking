var http = require('http');
var fs = require('fs');
var formidable = require('formidable');
var sqlop=require('./sqlop');
var mailer=require('./mailer');

function getRandomInt() {
    max=10000;
    return Math.floor(Math.random() * max);
}
  

http.createServer(function (req, res) {
    fs.readFile('main.html',function(err,data){
        if(err){
            return console.error(err);
        }
        else {

            if(req.url=='/nytm'){
                var form = new formidable.IncomingForm();
                form.parse(req, function (err, fields, files) {

                    var oldpath = files.UpFile.path;
                    var newpath = 'C:/Users/Vivaan/Data/MRU/3rd Sem/UI-2/LAB/Final Project/loc/' + files.UpFile.name;
                    fs.rename(oldpath, newpath, function (err) {
                        if (err) throw err;
                        console.log("File Uploded");
                    });
                    console.log(fields);
                    var bookid=getRandomInt();
                    var sqlqa="INSERT INTO booking values('"+fields.Username+"','"+fields.email+"',"+fields.phone_number+",'"+fields.Gender+"',"+fields.Age+",'"+fields.Add+"',"+fields.ZipC+",'"+fields.idproof+"','New York',"+bookid+")";
                    sqlop.serop(sqlqa);

                    var content = "Thanks For booking tickets to New York \nYour booking detail are as followed :- \n"+"Name:-"+fields.Username+"\nEmail id:-"+fields.email+"\nPhone Number:-"+fields.phone_number+"\nGender:-"+fields.Gender+"\nAge:-"+fields.Age+"\nAddress:-"+fields.Add+"\nZip Code:-"+fields.ZipC+"\nId Proof:-"+fields.idproof+"\nDestination:-New York \nBooking Id:-"+bookid+"\n";
                    mailer.mailsender(fields.email,"Thank For Booking",content);

                    fs.readFile('thank.html',function(err,data){
                        if(err){
                            return console.error(err);
                        }
                        else{
                            res.writeHead(200, {'Content-Type': 'text/html'});
                            res.write(data);
                            res.write("<br><center style='font-size: 15px;'>Booking Id :-"+bookid+"</center>");
                            return res.end();
                        }

                    });

                });
            }

            else{
                if(req.url=='/patm'){
                    var form = new formidable.IncomingForm();
                    form.parse(req, function (err, fields, files) {
    
                        var oldpath = files.UpFile.path;
                        var newpath = 'C:/Users/Vivaan/Data/MRU/3rd Sem/UI-2/LAB/Final Project/loc/' + files.UpFile.name;
                        fs.rename(oldpath, newpath, function (err) {
                            if (err) throw err;
                            console.log("File Uploded");
                        });
                        console.log(fields);
                        var bookid=getRandomInt();
                        var sqlqa="INSERT INTO booking values('"+fields.Username+"','"+fields.email+"',"+fields.phone_number+",'"+fields.Gender+"',"+fields.Age+",'"+fields.Add+"',"+fields.ZipC+",'"+fields.idproof+"','Paris',"+bookid+")";
                        sqlop.serop(sqlqa);

                        var content = "Thanks For booking tickets to Paris \nYour booking detail are as followed :- \n"+"Name:-"+fields.Username+"\nEmail id:-"+fields.email+"\nPhone Number:-"+fields.phone_number+"\nGender:-"+fields.Gender+"\nAge:-"+fields.Age+"\nAddress:-"+fields.Add+"\nZip Code:-"+fields.ZipC+"\nId Proof:-"+fields.idproof+"\nDestination:-Paris \nBooking Id:-"+bookid+"\n";
                        mailer.mailsender(fields.email,"Thank For Booking",content);
    
    
                        fs.readFile('thank.html',function(err,data){
                            if(err){
                                return console.error(err);
                            }
                            else{
                                res.writeHead(200, {'Content-Type': 'text/html'});
                                res.write(data);
                                res.write("<br><center style='font-size: 15px;'>Booking Id :-"+bookid+"</center>");
                                return res.end();
                            }
    
                        });
    
                    });
                }

                else{
                    if(req.url=='/sftm'){
                        var form = new formidable.IncomingForm();
                        form.parse(req, function (err, fields, files) {
        
                            var oldpath = files.UpFile.path;
                            var newpath = 'C:/Users/Vivaan/Data/MRU/3rd Sem/UI-2/LAB/Final Project/loc/' + files.UpFile.name;
                            fs.rename(oldpath, newpath, function (err) {
                                if (err) throw err;
                                console.log("File Uploded");
                            });
                            console.log(fields);
                            var bookid=getRandomInt();
                            var sqlqa="INSERT INTO booking values('"+fields.Username+"','"+fields.email+"',"+fields.phone_number+",'"+fields.Gender+"',"+fields.Age+",'"+fields.Add+"',"+fields.ZipC+",'"+fields.idproof+"','San Francisco',"+bookid+")";
                            sqlop.serop(sqlqa);

                            var content = "Thanks For booking tickets to San Francisco \nYour booking detail are as followed :- \n"+"Name:-"+fields.Username+"\nEmail id:-"+fields.email+"\nPhone Number:-"+fields.phone_number+"\nGender:-"+fields.Gender+"\nAge:-"+fields.Age+"\nAddress:-"+fields.Add+"\nZip Code:-"+fields.ZipC+"\nId Proof:-"+fields.idproof+"\nDestination:-San Francisco \nBooking Id:-"+bookid+"\n";
                            mailer.mailsender(fields.email,"Thank For Booking",content);        
        
                            fs.readFile('thank.html',function(err,data){
                                if(err){
                                    return console.error(err);
                                }
                                else{
                                    res.writeHead(200, {'Content-Type': 'text/html'});
                                    res.write(data);
                                    res.write("<br><center style='font-size: 15px;'>Booking Id :-"+bookid+"</center>"); 
                                    return res.end();
                                }
        
                            });
        
                        });
                    }

                    else{

                        if(req.url=='/catk'){
                            var form = new formidable.IncomingForm();
                            form.parse(req, function (err, fields, files) {
            
                                console.log(fields);
                                var cancelid=getRandomInt();
                                var sqlqa="INSERT INTO cancel values("+cancelid+","+fields.BookingId+")";
                                sqlop.serop(sqlqa);
    
                                var content = "Thanks For booking tickets\nYour cancelation details are as followed :- \nCancelion Id:-"+cancelid;
                                mailer.mailsender(fields.email,"Thank For Booking",content);        
            
                                fs.readFile('thank.html',function(err,data){
                                    if(err){
                                        return console.error(err);
                                    }
                                    else{
                                        res.writeHead(200, {'Content-Type': 'text/html'});
                                        res.write(data);
                                        res.write("<br><center style='font-size: 15px;'>Cancelation Id :-"+cancelid+"</center>"); 
                                        return res.end();
                                    }
            
                                });

            
                            });
                        }
                        
                        else{
                            if(req.url=="/admin"){
                                var form = new formidable.IncomingForm();
                                form.parse(req, function (err, fields, files) {

                                    console.log(fields);

                                    if(fields.Username=="vivaan" && fields.Pass=="viv"){
                                        sqlop.bookingfetcher();
                                        sqlop.cancelfetcher();
                                        fs.readFile('admin.html',function(err,data){
                                            if(err){
                                                return console.error(err);
                                            }
                                            else{
                                                fs.readFile('bookingdata.txt',function(err,data1){
                                                    if(err){
                                                        return console.error(err);
                                                    }
                                                    else{
                                                        fs.readFile('canceldata.txt',function(err,data2){
                                                            if(err){
                                                                return console.error(err);
                                                            }
                                                            else{
                                                                res.writeHead(200, {'Content-Type': 'text/html'});
                                                                res.write(data);
                                                                res.write(data1);
                                                                res.write("<br><hr><br>");
                                                                res.write(data2);
                                                                return res.end();
                                                            }
                                                        });
                                                    }
                                                });
                                                
                                                
                                                
                                            }
                    
                                        });
                                    }

                                    else{
                                        console.log("Invalid Id");
                                        res.write("Invalid Id");
                                        return res.end();
                                    }
                                });                                
                            }

                            else{

                                if(req.url=='/apcatk'){
                                    var form = new formidable.IncomingForm();
                                    form.parse(req, function (err, fields, files) {
                    
                                        console.log(fields);
                                        var sqlqa1="delete from cancel where cancel_id="+fields.CancelId+";";
                                        sqlop.serop(sqlqa1);
                                        var sqlqa2="delete from booking where bookid="+fields.BookingId+";";
                                        sqlop.serop1(sqlqa2);
            
                                        var content = "Thanks For booking tickets\nYour cancelation details are as followed :- \nCancelion Id:-"+fields.CancelId+"\nBooking Id:-"+fields.BookingId+"\nHave been approved";
                                        mailer.mailsender(fields.email,"Thank For Booking",content);        
                    
                                        res.write("Canceled");
                                        return res.end();
        
                    
                                    });
                                }

                                else{
                                    res.writeHead(200, {'Content-Type': 'text/html'});
                                    res.write(data);
                                    return res.end();
                                }
                            }
                        }



                    }
                }
            }
        }
    });
}).listen(8080);