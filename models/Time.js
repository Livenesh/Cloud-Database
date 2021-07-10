const mongoose = require('mongoose');

const TimeSchema = mongoose.Schema({
        
        time_id: {
            type: String,
            required : true
        },
        time_receive: {
            type: String,
            required : true
        },
        time_return: {
            type: String,
            required : true
        },
        
});

module.exports = mongoose.model('Times', TimeSchema);