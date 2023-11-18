const mongoose = require('mongoose');
const Schema = mongoose.Shema;

const UserSchema = new Schema({
    firstName: String,
    lastName: String,
    email: String,
    username: String,
    password: String
});

mongoosemodel('User', UserSchema);