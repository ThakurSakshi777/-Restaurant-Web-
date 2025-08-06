import mongoose from "mongoose";
import validator from "validator";

const reservationSchema = new mongoose.Schema({
    firstName : {
        type: String,
        required: true ,
        minLength : [ 3 ," fisrt name must contain at least 3 characters!"] ,
        maxLength: [ 30 , " first name cannot exceed 30 characters!"] ,
    } ,
     lastName : {
        type: String,
        required: true ,
        minLength : [ 3 ," last name must contain at least 3 characters!"] ,
        maxLength: [ 30 , " last name cannot exceed 30 characters!"] ,
    } ,
     email : {
        type: String,
        required: true ,
        validator: [validator.isEmail , " provide a valid email"],
    } ,
     phone : {
        type: String,
        required: true ,
        minLength : [ 10 ," Phone number must be contain only 10 digits!"] ,
        maxLength: [ 10 ," Phone number must be contain only 10 digits!"] ,
    } ,
    time: {
        type: String,
        require: true,
    },
    date: {
        type: String,
        require: true,
    },
});

export const Reservation = mongoose.model("Reservation" , reservationSchema);

