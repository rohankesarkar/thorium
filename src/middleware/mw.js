const jwt = require("jsonwebtoken");
const express = require('express');
const router = express.Router();

let tokenCheck = function(req, res, next){
    //authenticate
    let token = req.headers['x-auth-token'];
    let validToken = jwt.verify(token, 'functionup-thorium');
    if(validToken){
        req.validToken=validToken
    }else{
        res.status(401).send({status:false, msg:'invalis token'})
    }

}

// let authorise = function (req, res, next){
//     let token = req.header['x-auth-token']
//     let validToken = jwt.verify(token, 'functionup-thorium');

// }


module.exports.tokenCheck = tokenCheck;