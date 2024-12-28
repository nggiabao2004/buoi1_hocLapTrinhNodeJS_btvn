//Hiring the manager
const express = require('express')
const app = express()

//Got shirt and shoe
app.use(function (req, res, next){
    console.log('request: ', req)
    console.log('respone: ', req)
    next()
});

//taking an order
app.get('/', function(req, res){
    res.send('Hello World')
});

app.get('/getuser', function(req, res){
    res.send('Lay thong tin nguoi dung')
});

//open for business
app.listen(3000, function(){
    console.log('Server is running at http://localhost:3000')
});