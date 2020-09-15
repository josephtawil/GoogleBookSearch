const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
    id: {type: String, required: true},
    title: {type: String, required: true},
    authors: [String],
    description: {type: String, required:true},
    image: {type: String},
    link: {type: String},
});

const Book = mongoose.model("book", bookSchema);

module.exports = Book;