const express = require('express');
const fs = require('fs');
const datafile = 'server/data/whole.json';
const router = express.Router();

/* GET all pieces of my whole */
router.route('/')
  .get(function(req, res) {
    getWholeData().then(data=>{
      console.log("datat then")
      res.send(data)

    }).catch(error=>{
      res.status(500).send(error)
    }).finally(()=>console.log("this is the finally block"));
    console.log("this is doing something")
  });

  getWholeData=()=>{
    return new Promise((resolve,reject)=>{
      fs.readFile(datafile, 'utf8',(err,data)=>{
        if(err){
          reject(err)
        }else{
          let wholeData =JSON.parse(data);
          resolve(wholeData)
        }
  
      });

    })

  }

module.exports = router;