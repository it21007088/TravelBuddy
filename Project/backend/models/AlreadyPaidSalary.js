const mongoose = require('mongoose');

const PaidSalarySchema = new mongoose.Schema({


    emp_ID:{
        type:String,
        required:true
    },

    basicSalary:{
        type:Number,
        required:true
    },

    otRate:{
        type:Number,
        required:false
    },

    otTime:{
        type:Number,
        required:false
    },
  

    bonusSalary:{
        type:Number,
        required:false
    },

    totalSalary:{
        type:Number,
        required:false
    }
});
const AlreadyPaidSalary =mongoose.model("AlreadyPaidSalary",PaidSalarySchema)
module.exports = AlreadyPaidSalary;
