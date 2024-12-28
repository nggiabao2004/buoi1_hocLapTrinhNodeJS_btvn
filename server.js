const http= require('http');

const server= http.createServer((req, res)=>{
    res.writeHead(200, { 'content-type': 'text/plain'});
    res.end('Hello from Node.js Server!')
});

//Lắng nghe tại cổng 3000
server.listen(3000, ()=>{
    console.log('Server is running on https://localhost:3000');
});