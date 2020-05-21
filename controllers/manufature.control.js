const manufatureModel = require('../models/manufature')

function getAllManufatures(req, res) {
    manufatureModel.find().then(data => res.json(data)).catch(err => res.json({error: err}))
}
function addManufature(req, res) {
   const newManufature = new manufatureModel({
       name : req.body.name,
       logo : req.body.logo,
       website : req.body.website,
       active : req.body.active
   })
   newManufature.save().then(data => res.json(data)).catch(err => res.json({error: err}))
}
function editManufature(req, res) {
    manufatureModel.findByIdAndUpdate(req.params.id,req.body,{new: true}).then(data => res.json(data)).catch(err => res.json({error: err}))
}
function deleteManufature(req, res) {
    manufatureModel.findByIdAndDelete(req.params.id).then(data=> res.json(data)).catch(err => res.json({error: err}))
}

exports.getAllManufatures = getAllManufatures
exports.addManufature = addManufature
exports.editManufature = editManufature
exports.deleteManufature = deleteManufature