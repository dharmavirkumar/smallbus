const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({
    checkin:{
        type: Date,
        required: true
    },
    checkout:{
        type: Date,
        required: true
    },
    guests:{
        type:Number,
        required: true  
    },
    hotel: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    roominfo: {
        type: String,
        required: true
    }
})




module.exports = mongoose.model("Booking", bookingSchema );