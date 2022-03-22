const mongoose = require('mongoose');

const employeeSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    adress: {
        type: String,
        required: true
    },
    jobPosition: {
        type: String,
        required: true
    },
    dateOfBirth: {
        type: String,
        required: true
    },
    joinDate: {
        type: Number,
        required: true
    },
    salary: {
        type: Number,
        required: true
    },
    isAdmin: {
        type: Boolean,
        required: false,
        default: false,
    }

});

const Employee = mongoose.model('Employee', employeeSchema);

module.exports = {
    Employee
}