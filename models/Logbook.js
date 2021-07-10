const { ObjectId } = require('mongodb');
const mongoose = require('mongoose');

const LogbookSchema = mongoose.Schema({
        
        student_id: {
            type: String,
            required : true
        },
        equipment_id: {
            type: String,
            required : true
        },
        date_id: {
            type: String,
            required : true
        },
        time_id: {
            type: String,
            required : true
        },
        
        
});

module.exports = mongoose.model('Logbooks', LogbookSchema);