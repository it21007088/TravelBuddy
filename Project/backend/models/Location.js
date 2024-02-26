const mongoose = require('mongoose');

const Schema = mongoose.Schema;

//Creating Schema for Location data 
const LocationSchema = new Schema({

    LocationName : {
            type : String,
            required :true
    },

    description : {
            type : String,
            required :true
    },
        
    district: {
            type : String,
    },
        
    linkPlace : {
            type : String,
            required :true
    }



})

const Location = mongoose.model("Location",LocationSchema);

//exporting initialized Location data model
module.exports = Location;