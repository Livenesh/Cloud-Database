const mongoose = require('mongoose');

const EquipmentSchema = mongoose.Schema({
        
        equipment_id: {
        type: String,
        required : true
        },
        equipment_name: {
            type: String,
            required : true
        },
        equipment_condition: {
            type: String,
            required : true
        },
        
});

module.exports = mongoose.model('Equipments', EquipmentSchema);