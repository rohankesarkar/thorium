const jwt = require("jsonwebtoken");
const userModel = require("../models/userModel");

const createUser = async function(req,res){
    try{let data = req.body;
        console.log(data)
        if(Object.keys.length != 0)
        {let savedData = await userModel.create(data);
        res.status(201).send({newUser:savedData})
    }
    else res.status(400).send({msg: "bad request"})
    }
    catch(error){
      console.log("This is error msg : ",error.message)
      res.status(500).send({ msg: "Error", error: err.message })
    }
    
}

const loginUser = async function(req,res){
   try{
    let emailId = req.body.emailId;
    let password = req.body.password;

    let user = await userModel.findOne({emailId:emailId, password:password})
    if(!user) return res.send({status: false, Warning : "Email ID or password is incorrect"})
    
    let token = jwt.sign({userId:user._id.toString()}, "SECRET MESSAGE")
    res.status(200).send({status : true, token : token});
   }catch(err){
  console.log("This is error msg: ", err.message)
  res.status(500).send({ msg: "Error", error: err.message })
   }
}

const getUserData = async function(req,res){
    try{
    let userId = req.params.userId;
    let user = await userModel.findById(userId);
    if(!user) return res.send({status : false, warning: "Invalid UserId"})

    res.status(200).send({status:true, data : user})
    }
    catch(error){
        res.status(500).send({ msg: "Error", error: err.message })
    }
}

const updateUser = async function(req,res){
   try{
    let updateDetails = req.body;
    let userId = req.params.userId;
    let updatedUser = await userModel.findOneAndUpdate({_id:userId},updateDetails,{new: true})
    res.status(200).send({status: true, msg: updatedUser})
   }
   catch(error){
    res.status(500).send({ msg: "Error", error: err.message })
} 
}

const deleteUser = async function(req,res){
    try{
    let userId = req.params.userId;
    let updatedUser = await userModel.findOneAndUpdate({_id:userId},{$set: {isDeleted : true}},{new:true})
    res.status(200).send({status: true, msg:updatedUser})
    }
    catch(error){
        res.status(500).send({ msg: "Error", error: err.message })
    } 
}

module.exports.createUser = createUser;
module.exports.getUserData = getUserData;
module.exports.updateUser = updateUser;
module.exports.loginUser = loginUser;
module.exports.deleteUser = deleteUser;
