const companyModel = require('../models/company')

function getAllCompany(req, res) {
    companyModel.find().then(data => res.json(data)).catch(err => res.json(err))
}
function addCompany(req, res) {
    const newCompany = new companyModel({
      name:req.body.name,
      code:req.body.code,
      phone: req.body.phone,
      email:req.body.email,
      fax: req.body.fax,
      website: req.body.website,
      country:req.body.country,
      address1:req.body.address1,
      address2: req.body.address2,
      logo: req.body.logo,
      header: req.body.header,
      footer: req.body.footer,
      status: req.body.status,
      report: req.body.report,
      color: req.body.color,
    });
    try {
        newCompany.save().then( res.json(newCompany))
    } catch (error) {
        res.send(error)
    }
}
function editCompany(req, res) {
    companyModel.findByIdAndUpdate(req.params.id, req.body, {new: true}).then(data => res.json(data)).catch(err => res.json({error: err}))
}

exports.getAllCompany = getAllCompany
exports.addCompany = addCompany
exports.editCompany = editCompany