const express = require('express');
const fs = require('fs');
const datafile = 'server/data/whole.json';
const router = express.Router();

/* GET all pieces of my whole */
router.route('/')
  .get(function(req, res) {

    getWholeData((err,data)=>{
      if(err){
        console.log("ohohoh")
      }else{
        console.log("returning data to the client")
        res.send(data)
      }
    });

    console.log("this is doing something")


  });

  getWholeData=(callback)=>{
    fs.readFile(datafile, 'utf8',(err,data)=>{
      if(err){
        callback(err,null)
      }else{
        let wholeData =JSON.parse(data);
        callback(null,wholeData)
      }

    });
  }

module.exports = router;