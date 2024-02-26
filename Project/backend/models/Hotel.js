const mongoose = require('mongoose');

const Schema = mongoose.Schema;

//Creating Schema for Hotel data 
const HotelSchema = new Schema({

    regNum : {
            type : String,
            required: true
    },  
    
    hotelName : {
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
    }



})

const Hotel = mongoose.model("Hotel",HotelSchema);

//exporting initialized Hotels data model
module.exports = Hotel;