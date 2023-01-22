require('dotenv').config()
const mongoDb = require('./db/database')
const data =require('./data/data.json')
const Product = require('./schema/schema')
const start = async() =>{
    try{
     await mongoDb(process.env.MONGO_URI)
      await Product.create(data)
      console.log('succes')
    }catch(error){
        console.log(error)
    }
}
start()