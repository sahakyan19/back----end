const db = require('../db')

class apiController{

async getProducts (req, res){
    try{
       db.query('SELECT * FROM all_products', (err, results) =>{
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
async getTablets (req, res){
    try{
       db.query('SELECT * FROM tablets', (err, results) =>{
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
async getAccessories (req, res){
    try{
       db.query('SELECT * FROM accessories', (err, results) =>{
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
