let axios = require("axios")

let getMeme = async function(req, res){
    try{
    let    id  =req.query.template_id 
     text =req.query.text0 
        txt = req.query.text1
     let result = await axios.post(`https://api.imgflip.com/caption_image?template_id=${id}&text0=${text}&text1=${txt}&username=chewie12345&password=meme@123`)
      console.log(result)
      res.status(200).send({status: true, data:result.data})
    }catch(error){
        console.log(error)
        res.status(500).send({status: false, msg:"server error"})
        }
}

module.exports.getMeme = getMeme