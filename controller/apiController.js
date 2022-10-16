const db = require('../db')

class apiController{

async getMobiles (req, res){
    try{
       db.query('SELECT * FROM mobiles', (err, results) =>{
        if(err){
            console.log(err)
        }
        else{
            res.send(results)
        }
       })
    }catch(e){
     
    }
}  
}

module.exports = new apiController()
