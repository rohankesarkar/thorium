let axios = require("axios")

let getWeather = async function (req, res) {
    try{
    let cities = ["Bengaluru","Kolkata","Mumbai","London","Moscow","Delhi"]
    let cityObjectArray=[ ]
   
    for(i=0; i<cities.length; i++){
        let obj = {city: cities[i]}
        let result = await axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${cities[i]}&appid=68436465193a91663b0218045bbf8e2f`)
        console.log(result.data.main.temp)

        obj.temp = result.data.main.temp
        cityObjectArray.push(obj)

    }
    let sorted = cityObjectArray.sort(function(a,b) {return(a.temp-b.temp)})
    console.log(sorted)
    res.status(200).send({status: true, data:sorted})
}catch(error){
console.log(error)
res.status(500).send({status: false, msg:"server error"})
}
}




module.exports.getWeather = getWeather