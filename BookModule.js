var mongoose = require('mongoose');
var db = mongoose.createConnection('mongodb://localhost:27017/test');

const bookSchema = mongoose.Schema({
    title: {
        type: String,
        required: [true, 'Book must have title'],
    },
    author: {
        type: String,
        required: [true, 'Book must have Author'],
    },
    rating: {
        type: Number,
        default: 0,
        min: 0,
        max: 5,
    }
});


var Book = db.model('Book', bookSchema);

module.exports = Book;