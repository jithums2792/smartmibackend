const express = require('express')
const router = express.Router()
const unitControl = require('../controllers/units.control')

router.get('/all',(req,res) => unitControl.getAllUnit(req, res))
router.post('/create',(req, res) => unitControl.addUnit(req, res))
router.patch('/update/:id', (req, res) => unitControl.editUnit(req, res))
router.delete('/delete/:id',(req, res) => unitControl.deleteUnit(req, res))

module.exports = router