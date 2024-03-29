const mongoose = require('mongoose');

const Schema = mongoose.Schema;

//Creating Schema for Schedule data 
const ScheduleSchema = new Schema({

    scheduleID : {
            type : String,
            required: true
    },  
    
    startDate : {
            type : Date,
            required :true
    },

    endDate : {
            type : Date,
            required :true
    },
        
    customerName: {
            type : String,
            required :true
    },
        
    driverName : {
            type : String,
            required :false
    },

    publicTransport : {
                type : String,
                required :false
    }



})

const Schedule = mongoose.model("Schedule",ScheduleSchema);//(table name , document name),Schedule name

//exporting initialized Schedule data model
module.exports = Schedule;