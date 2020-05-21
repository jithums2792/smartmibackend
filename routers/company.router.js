const express = require('express')
const router = express.Router()
const companyControl = require('../controllers/company.control')


router.get('/all', (req, res) => companyControl.getAllCompany(req, res))
router.post('/create', (req, res) => companyControl.addCompany(req, res))
router.patch('/update/:id',(req, res) => companyControl.editCompany(req, res))

module.exports = router
