var express = require('express');
var router = express.Router();

/* GET home page. */

router.get('/',function(req,res){
  res.sendFile(path.join(__dirname+'/index.html'));
  //__dirname : It will resolve to your project folder.
});

router.get('/',function(req,res){
  res.sendFile(path.join(__dirname+'/verse1.txt'));
  //__dirname : It will resolve to your project folder.
});

router.get('/',function(req,res){
  res.sendFile(path.join(__dirname+'/verse4.txt'));
  //__dirname : It will resolve to your project folder.
});


module.exports = router;
