const db = require("../configs/db.js");
const mongoose = require("mongoose");
const { Schema } = mongoose;

const workSchema = new Schema({
    headers: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        default: ''
    },
    startDate: {
        type: Date,
        required: true,
    },
    endDate: {
        type: Date,
        required: true,
    },
    workStatus: {
        type: String,
        enum:['Not-Started', 'In-Progress', 'Done', 'Cancel'],
        default:'Not-Started'
    }
},{timestamps:true,});

const workModel = db.model('works', workSchema);
module.exports = workModel;