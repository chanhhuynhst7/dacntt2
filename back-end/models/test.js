const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const testSchema = new Schema({
    name: {
        type: String,
        require: true
    },
    number: {
        type: String,
    }
})

module.exports = test = mongoose.model('test', testSchema)