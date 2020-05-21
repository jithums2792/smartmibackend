const mongoose = require('mongoose');
const schema = mongoose.Schema;
const user = new schema({
    name: {type: String, required: true},
    company: {type: String, required: true},
    assignedcompanies: {type: Array, required: true},
    designation: {type: String, required: true},
    department: {type: String, required: true},
    reportingto: {type: String, required: true},
    role: {type: String, required: true},
    employeecode: {type: String, required: true},
    mobile: {type: Number, required: true},
    telephone: {type: String},
    email: {type: String, required: true},
    username: {type: String, required: true},
    password: {type: String, required: true},
    image: {type: String},
    active: {type: Boolean, required: true}
})

const userModel = mongoose.model('users',user)
module.exports = userModel