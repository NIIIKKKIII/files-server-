const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();

app.get('/files', function(req, res){
    fs.readdir(path.join(__dirname), (err, data)=>{
        if(err){
            return res.json("cannot find the fucking file")
        }else{
            res.send(data)
        }
    })
})



app.get('/file/:filename', function(req,res){
const filepath = path.join(__dirname, req.params.filename);
fs.readFile(filepath, "utf-8", (err, data)=>{
    if(err){
       return res.send(err, "error found ")
    }else{
      return  res.send(data)
    }
})
})








app.listen(3000);
