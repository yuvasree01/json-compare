var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  let dataArray=[
    {name:"john",age:12},
    {name:"jessie",age:15},
    {name:"karthik",age:17}
  ];
  res.json({
    data:dataArray
  });
});

module.exports = router;
