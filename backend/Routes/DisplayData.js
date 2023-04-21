const express = require('express')
const router = express.Router()

router.post('/foodData', (req,res)=>{
    try{
        // console.log(global.foodData)
        // console.log("End of data")
        res.send([global.foodData, global.foodCategory])
    }
    catch(err)
    {
        console.log(err)
        res.send("Server error")
    }
})

module.exports = router