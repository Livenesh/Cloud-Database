const mongoose = require('mongoose');

const StudentSchema = mongoose.Schema({
        
        student_id: {
            type: String,
            required : true
        },
        student_name: {
            type: String,
            required : true
        },
        phone_number:{
            type: String,
            required : true
        },
});

module.exports = mongoose.model('Students', StudentSchema);