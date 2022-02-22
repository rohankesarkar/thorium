var today = new Date();
var dd = String(today.getDate());
var mm = String(today.getMonth());

const month = ["January","Feb","March","April","May","June","Jully","Aug","Sept","Oct","Nov","Dec"]


function printDate(){
    console.log(dd)
}
function printMonth(){
    console.log(mm)
}

function getBatchInfo(){
    console.log("Thorium,W3D1, the topic for today is Node js module system")
}
module.exports.printDate = printDate
module.exports.printMonth = printMonth
module.exports.getBatchInfo = getBatchInfo