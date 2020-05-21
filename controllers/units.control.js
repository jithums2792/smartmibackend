const unitModel = require('../models/units')

function getAllUnit(req, res) {
    unitModel.find().then(data => res.json(data)).catch(err => res.json({error: err}))
}
function addUnit(req, res) {
    const newUnit = new unitModel({
        name: req.body.name,
        symbol: req.body.symbol
    })
    newUnit.save().then(data => res.json(data)).catch(err => res.json({error: err}))
}
function editUnit(req, res) {
    unitModel.findByIdAndUpdate(req.params.id,req.body,{new: true}).then(data => res.json(data)).catch(err => res.json({error: err}))
}
function deleteUnit(req, res) {
    unitModel.findByIdAndDelete(req.params.id).then(data => res.json(data)).catch(err => res.json({error: err}))
}

exports.getAllUnit = getAllUnit
exports.addUnit = addUnit
exports.editUnit = editUnit
exports.deleteUnit = deleteUnit