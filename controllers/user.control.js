const userModel = require('../models/user')

function getAllUser(req, res) {
    userModel.find().then(data => res.json(data)).catch(err => res.json({error: err}))
}
function addUser(req, res) {
    newUser = new userModel({
        name: req.body.name,
        company: req.body.company,
        assignedcompanies: req.body.assignedcompanies,
        designation: req.body.designation,
        department: req.body.department,
        reportingto: req.body.reportingto,
        role: req.body.role,
        employeecode: req.body.employeecode,
        mobile: req.body.mobile,
        telephone: req.body.telephone,
        email: req.body.email,
        username: req.body.username,
        password: req.body.password,
        image: req.body.image,
        active: req.body.active
    })
    newUser.save().then(data => res.json(data)).catch(err => res.json({error: err}))
}
function editUser(req, res) {
    userModel.findByIdAndUpdate(req.params.id, req.body).then(data => res.json(data)).catch(err => res.json({error: err}))
}
function deleteUser(req, res) {
    userModel.findByIdAndDelete(req.params.id).then(data => res.json(data)).catch(err => res.json({error: err}))
}

exports.getAllUser = getAllUser
exports.addUser = addUser
exports.editUser = editUser
exports.deleteUser = deleteUser
