const express = require('express')
const router = express.Router()
const manufatureControl = require('../controllers/manufature.control')

router.get('/all',(req,res) => manufatureControl.getAllManufatures(req, res))
router.post('/create',(req, res) => manufatureControl.addManufature(req, res))
router.patch('/update/:id', (req, res) => manufatureControl.editManufature(req, res))
router.delete('/delete/:id',(req, res) => manufatureControl.deleteManufature(req, res))

module.exports = router