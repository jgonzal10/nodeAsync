const express = require('express');
const fsPromises = require('fs').promises;
const datafile = 'server/data/whole.json';
const router = express.Router();

/* GET all pieces of my whole */
router.route('/')
  .get(async (req, res)=> {
    try{
      let wholeData= await getWholeData()
      console.log("returning async data");
      res.send(wholeData)
    }catch(error){
      res.status(500).send(error)
    }

  });

  getWholeData=async ()=>{
   let rawData= await fsPromises.readFile(datafile, 'utf8');
   let wholeData= JSON.parse(rawData)

   console.log(wholeData)
   return wholeData;

  }

module.exports = router;