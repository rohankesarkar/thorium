const express = require('express');
const res = require('express/lib/response');
const router = express.Router();

let persons= [
    {
    name: "PK",
    age: 10,
    votingStatus: false
 },
 {
    name: "SK",
    age: 20,
    votingStatus: false
 },
 {
    name: "AA",
    age: 70,
    votingStatus: false
 },
 {
    name: "SC",
    age: 5,
    votingStatus: false
 },
 {
    name: "HO",
    age: 40,
    votingStatus: false
 }
 ]
 

// QUERY PARAMS
// localhost:3000/get-query-1?myCoolVar=24&xyz=hiFunctionUP
router.post("/election", function (req, res) {
let votingAge = req.query.votingAge
let arr = [];
for(let i=0; i<persons.length; i++){
    if(person[i].age > votingAge){
        person[i].votingStatus = true
        arr.push(person[i])
    }
}
if(arr.length > 0){
    return res.send(arr)
}else{
    return res.send("no person found")
}

})


// take marks in req.query variable named "marks" and send "pass" if > 40 else "fail"

// ASSIGNMENT:
// you will be given an array of persons ( i.e an array of objects )..each person will have  a {name: String , age: Number, votingStatus: true/false(Boolean)}
// take input in query param as votingAge..and for all the people above that age, change votingStatus as true
// also return an array consisting of only the person that can vote

//  take this as sample for array of persons:
// let persons= [
//     {
//     name: "PK",
//     age: 10,
//     votingStatus: false
// },
// {
//     name: "SK",
//     age: 20,
//     votingStatus: false
// },
// {
//     name: "AA",
//     age: 70,
//     votingStatus: false
// },
// {
//     name: "SC",
//     age: 5,
//     votingStatus: false
// },
// {
//     name: "HO",
//     age: 40,
//     votingStatus: false
// }
// ]





module.exports = router;