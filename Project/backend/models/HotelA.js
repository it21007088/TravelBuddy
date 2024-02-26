const mongoose = require('mongoose');

//schema
const Schema = mongoose.Schema; //creating an object
const hotelASchema = new Schema(
    {
        Full_name : {type:String,
        required: true},//name string is required checked via backend validation
    

        Address : {type : String,
        required :true},

        Email : {type : String,
            required :true},
        
        Contact_Number : {type : String,
            required :true},
        
        NIC_Number: {type : String,
            required :true},

        Password: {type : String,
            required :true},
            
    }
)

const HotelA = mongoose.model("HotelA",hotelASchema); //(table name ,document name),Schema name

module.exports = HotelA; 