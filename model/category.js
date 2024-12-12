const mongoose = require('mongoose')

const categorySchema  = new mongoose.Schema({
   title:
   {type:String},

   description:
   {String},
   
   
},
{timestamps:true}
)


const Category = mongoose.model("Category",categorySchema);

module.exports =Category