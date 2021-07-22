
const express = require('express');
var request=require('request');
const app = express();
const port=5000;

// view engine setup
app.get("/",(req,res) => res.send("Hello world"));
app.get("/jsonCompare",(req,res) => res.send("this is comparison point"));
app.get("/getjson",(req,res) =>{
  request(
    "http://localhost:3000/",
    function(error,response,body){
      if(!error && response.statusCode==200){
        res.send(body);
      }
    }
  );
});
app.listen(port, () =>console.log('App listening on port ${port}!'));