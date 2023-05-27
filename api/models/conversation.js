const mongoose = require('mongoose');

const conversationSchema = new mongoose.Schema();

module.exports = mongoose.model('Conversation', conversationSchema);