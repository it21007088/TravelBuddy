const mongoose = require('mongoose');

//schema
const Schema = mongoose.Schema; //creating an object
const communitySchema = new Schema(
    {
        name : {type:String,
            required: true},//name string is required checked via backend validation
            
        description : {type:String,
        required: true},//name string is required checked via backend validation


    

        
            


               
    }
)

const Community = mongoose.model("Community",communitySchema); //(table name ,document name),Schema name

module.exports = Community;