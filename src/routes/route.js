const logger=require('../logger/logger.js')
const express = require('express');
const router = express.Router();
const util = require("../util/helper")
// const underscore = require('underscore')
const helper = require('../util/helper')
const formatter = require('../Validator/formatter')
const lodash = require('lodash')

router.get('/test-me', function (req, res) {
    // obj.printMessage('thorium')
   let name = ['Hariom','Arpit','Akash','Sabiha']
    logger.printMessage('thorium')
    console.log(logger.url)
    logger.printWelcomeMessage()
    //2
    helper.printCurrentDate()
    helper.printCurrentMonth()
    helper.printBatchInfo()

    //3
    formatter.trim()
    formatter.changeToUpperCase()
    formatter.changeToLowerCase()
    //Lodash function
    let months = ['Jan', 'Feb', 'March', 'April', 'May', 'Jun' , 'jully', 'Ayg', 'Sept', 'Oct', 'Nov','Dec']
    let subArray = lodash.chunk(months,3)
    console.log('Chunks of months: ',subArray)
     
    let oddNumbers = [1,3,5,7,9,11,13,1,17,19]
    let lastNumbers = lodash.chunk(months,3)
    console.log('Last 9 odd numbers: ', lastNumbers)
    
    let arr1 = [1, 2, 3]
    let arr2 = [2, 3, 4, 4]
    let arr3 = [4, 5]
    let arr4 = [4, 6, 4]
    let arr5 = [5, 8]
    console.log('Merged array with unique value: ', lodash.union(arr1, arr2, arr3, arr4, arr5))

    let movie1 = ['horror', 'The singing']
    let movie2 = ['drama', 'Titanic']
    let movie3 = ['thriller', 'Shutter Iceland']
    let movie4 = ['fantacy', 'Pans Labyrinth']
    let movieObject = lodash.fromPairs([movie1,movie2,movie3,movie4])
    console.log('Movies object:', movieObject)
    
    res.send('My first ever api of this week')
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