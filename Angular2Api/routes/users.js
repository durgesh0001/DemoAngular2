var express = require('express');
var router = express.Router();
var User = require('./user.model.js');

/* GET users listing. */
router.get('/', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    User.find({}, function (err, employees) {

        if(!employees) { return res.send(404); }
        return res.json(employees);
    });
});
router.post('/add', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    var user=JSON.parse(req.body.json);
console.log(user)
    User.create(user, function(err, employees) {
        if(err) { console.log(err) }
        res.json(201,employees);
    });
});

module.exports = router;
