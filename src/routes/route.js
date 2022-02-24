const express = require('express');
const router = express.Router();

let players = [];

router.post("/players", function(req, res){
    let player = req.body;
    let playerName = player.name
    for(i=0; i<players.length; i++){
        if(players[i].name == playerName){
            res.send('Player already exist')
        }
    }
    players.push(player);
    console.log("here is player array",players);
    res.send(players);   
})
router.post('/playrs/:playerName/booking/:bookingId', function(req, res){
    let name = req.params.playerName
    let isPlayerPresent = false

    for(let i=0; i<players.length; i++){
        if(players[i].name == name){
            isPlayerPresent= true
        }
        if(!isPlayerPresent){
            return res.send('Player is not present')
        }
        res.send('Player is present')
    }
})

module.exports = router;