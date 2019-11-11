const mongoose = require('mongoose');

const connection = async ()=>{
    try{
        await mongoose.connect('mongodb://192.168.50.160/discord_nan?authSource=admin',{
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false,
            user: "admin",
            pass:"mongo123admin",
        });
        console.log('connected to mongodb');
    }catch(e){
        console.log("erreur : ",e);
    }
}

module.exports = connection;