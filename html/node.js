// var http = require('http');
// var fs = require('fs');
// var path = require('path');

// http.createServer(function (request, response) {
//     var filePath = '.' + request.url;
//     console.log(filePath);
   
//     var extname = path.extname(filePath);
//     var contentType = 'text/html';
//     switch (extname) {
//         case '.js':
//             contentType = 'text/javascript';
//             break;
//         case '.css':
//             contentType = 'text/css';
//             break;
//         case '.json':
//             contentType = 'application/json';
//             break;
//         case '.png':
//             contentType = 'image/png';
//             break;      
//         case '.jpg':
//             contentType = 'image/jpg';
//             break;
//         case '.wav':
//             contentType = 'audio/wav';
//             break;
//     }

//     fs.readFile('index.html', function(error, content) {
        
//             response.writeHead(200, { 'Content-Type': contentType });
//             response.end(content, 'utf-8');
        
//     });

// }).listen(3000);

const http = require('http');
const fs = require('fs');
const port = 3000

const server = http.createServer(function(req, res){
    res.writeHead(200,{ 'Content-Type': 'text/html' });
    fs.readFile('index.html',function(error, data){
        if(error){
            res.writeHead(404)
            res.write('Error: File Not Found')
        } else {
            res.write(data)
        }
        res.end()
    });
    res.end()
})

server.listen(port, function(error){
    if(error){
        console.log('Something went wrong', error);
    } else{
        console.log('Server is listning on port', + port);
        console.log('Hello NodeJS')
    }
});