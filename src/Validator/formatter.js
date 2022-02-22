function trim(){
    let name = ' Rohan Keasrkar '
    console.log('Trimmed name is ',name.trim)
}
 function changeToLowerCase(){
     let name ='RoHaN KeSaRkaR'
     console.log('Name in lowercase is: ',name.toLocaleLowerCase() )


 }

 function changeToUpperCase(){
     let name ='rohan kesarkar'
     console.log('Name in uppercase is: ',name.toUpperCase())
 }
 module.exports.trim = trim
 module.exports.changeToLowerCase = changeToLowerCase
 module.exports.changeToUpperCase = changeToUpperCase