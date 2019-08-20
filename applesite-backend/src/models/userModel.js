const mongoose = require('mongoose');

const { Schema } = mongoose;

const userModel = new Schema({
  _id: { type: String },
  roles: [{ type: String, enum: ['TFTUSER', 'TFTADMIN', 'SUPERADMIN'] }],
  email: { type: String },
  name: { type: String },
});

module.exports = mongoose.model('User', userModel);
