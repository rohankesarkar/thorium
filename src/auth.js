const jwt = require("jsonwebtoken");

// const userModel = require("../models/userModel")

let middleware = async function (req, res, next){
    let token = req.header["isdeleted"]
    let decodedToken = jwt.verify(tocken, "functionup");
    if(!decodedToken)
    return res.send({status: false, msg: "token is invalid"});
    next();
}

module.exports.middleware = middleware

