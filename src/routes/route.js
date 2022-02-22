const obj=require('../logger/logger.js')
const express = require('express');
const router = express.Router();
const util = require("../util/helper")

router.get('/test-me', function (req, res) {
    // obj.printMessage('thorium')
    
    console.log(obj.url)
    
    res.send('Welcome to my application. I am Rohan and a part of FunctionUp Thorium cohort')
});
router.get('/hello', function (req, res) {
    // obj.printMessage('thorium')
    util.printDate()
    util.printMonth()
    util.getBatchInfo()
    
    console.log(obj.url)
    
    res.send('Welcome to my application. I am Rohan and a part of FunctionUp Thorium cohort')
});

module.exports = router;