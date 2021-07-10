const mongoose = require('mongoose');

const DateSchema = mongoose.Schema({
        date_id: {
            type: String,
            required : true
         },
        date_receive: {
            type: String,
            required : true
        },
        date_return: {
            type: String,
            required : true
        },
        
});

module.exports = mongoose.model('Dates', DateSchema);