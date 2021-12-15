var express = require('express');
var router = express.Router();
var {index, send, next, olvidar} = require("../controllers/indexController")
var validation = require("../validations/formValidation")
/* GET home page. */
router.get('/', index)
router.post('/', validation, send)
router.get("/next", next)
router.post("/next", olvidar);

module.exports = router;
