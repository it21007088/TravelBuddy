const mongoose = require('mongoose');

const Schema = mongoose.Schema;

//Creating Schema for time table train data 
const TimetrainSchema = new Schema({

    trnspodtType: {
        type : String,
        required: true
    }, 

    trainName : {
        type : String,
        required: true
    }, 

    startStation : {
            type : String,
            required: true
    },  
    
    endStation : {
            type : String,
            required :true
    },

    startTime : {
            type : String,
            required :true
    },
        
    endTime: {
            type : String,
            required :true
    },
        



})

const TimeTrain = mongoose.model("TimeTableTrain",TimetrainSchema);

//exporting initialized traveler data model
module.exports = TimeTrain;