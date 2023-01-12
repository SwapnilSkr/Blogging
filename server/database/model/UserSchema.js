const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    username: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    img: {
        type: String,
        
    },
    imgName: {
        type: String,
        
    },
    description: {
        type: String,
    }
},{timestamps: true})

module.exports = mongoose.model('User', userSchema);