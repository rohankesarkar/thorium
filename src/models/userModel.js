const mongoose = require('mongoose');

const booksSchema = new mongoose.Schema( {
 bookName: "String",
 authorName: "String",
 category: "String",
 year: Number
}, { timestamps: true });

module.exports = mongoose.model('Books', booksSchema) //users



// String, Number
// Boolean, Object/json, array