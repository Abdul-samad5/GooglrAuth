const mongoose = require("mongoose")
mongoose.Promise = global.Promise
const dbUrl = "mongodb+srv://proctor_test:HCyAVifrodO9B5yO@cluster0.buffyyq.mongodb.net/users"
mongoose.set('strictQuery', false);
const connect = async ()=>{
    mongoose.connect(dbUrl, { useNewUrlParser: true })
    const db = mongoose.connection
    db.on("error",()=>{
        console.log("could not connect");
    })
    db.once("open",()=>{
        console.log("> Successfully connected to db");
    })    
}
module.exports = {connect}

//{useNewParser: true, useUnifiedTopology: true}