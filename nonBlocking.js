const fs=require('fs');
fs.readFile('File.txt','utf8',(err, data)=>{
    if (err) throw err;
    console.log(data);
});
console.log('read file started');