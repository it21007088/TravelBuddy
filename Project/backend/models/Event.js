//IT21098246
//Samiru J.G.S
//Event Management

const mongoose = require('mongoose');

//schema
const Schema = mongoose.Schema; //creating an object
const eventSchema = new Schema(
    {
        name : {type:String,
        required: true},//name string is required checked via backend validation
    

        eventType : {type : String,
        required :true},

        description : {type : String,
            required :true},
        
        place : {type : String,
            required :true},
        
        date : {
                type : Date,
                required : true
            },
        eventLink : {
                type : String,
                required : true
            }

        

               
    }
)

const Event = mongoose.model("Event",eventSchema); //(table name ,document name),Schema name

module.exports = Event;