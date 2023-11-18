const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  created: {
    type: Date,
    default: Date.now,
  },
  // Add more fields as needed
});

// Using schema modifiers

// 1. Uppercase modifier
UserSchema.path('username').set((username) => {
  return username.toUpperCase();
});

// 2. Trim modifier
UserSchema.path('email').get((email) => {
  return email.trim();
});

// 3. Custom modifier
UserSchema.path('password').set((password) => {
  // Your custom modification logic here
  return modifiedPassword;
});

mongoose.model('User', UserSchema);
