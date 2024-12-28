//Hiring the manager
const express = require('express')
const app = express()
const path = require('path')

//Taking an order
app.get('/', function (req, res){
    res.send('Hello World')
});

app.get('getUser', function (req, res){
    res.send('Lay thong tin nguoi dung')
});

app.get('/login', function (req, res){
    res.sendFile(path.join(__dirname, 'login.html'));
});

//Open for business
app.listen(3000,function(){
    console.log('Server is running at https://localhost3000')
});