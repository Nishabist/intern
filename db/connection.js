const mongoose= require("mongoose");

require("dotenv").config();

const connection = async ()=>{
    mongoose.connect(process.env.DATABASE_URL    )
    
    .then(()=>console.log("DB Connection successful"))
    .catch((error)=>{
        console.log("Issue has appeared");
        process.exit(1);
    })
}


    

module.exports = connection
