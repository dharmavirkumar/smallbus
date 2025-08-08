const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({
    checkin:{
        type: Date,
        
    },
    checkout:{
        type: Date,
        
    },
    guests:{
        type:Number,
        
    },
    hotel: {
        type: String,
        
    },
    name: {
        type: String,
        
    },
    email: {
        type: String,
      
    },
    roominfo: {
        type: String,
        
    },
    phone: {
        type: String,
        
    },
    message: {
        type: String,
    }
})




module.exports = mongoose.model("Booking", bookingSchema );