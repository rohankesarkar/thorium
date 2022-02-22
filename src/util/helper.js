var today = new Date();
var dd = String(today.getDate());
var mm = String(today.getMonth());

const month = ["January","Feb","March","April","May","June","Jully","Aug","Sept","Oct","Nov","Dec"]


function printDate(){
    let today = new Date()
    let date = today.getDate()+'_'+(today.getMonth()+ 1)+'_'+today.getFullYear()
    console.log('Current date is: ', date)
}

function printMonth(){
    let today = new Date()
    let month = today.getMonth()+1
    console.log('Current month is: ', month)

}

function getBatchInfo(){
    console.log('Thorium, W3D1,the topic for today is Nodejs module system')

}
module.exports.printCurrentDate = printDate
module.exports.printCurrentMonth = printMonth
module.exports.printBatchInfo = getBatchInfo