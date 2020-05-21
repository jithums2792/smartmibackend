const express = require('express')
const router = express.Router()
const userControler = require('../controllers/user.control')

router.get('/all',(req,res) => userControler.getAllUser(req, res))
router.post('/create',(req, res) => userControler.addUser(req, res))
router.patch('/update/:id', (req, res) => userControler.editUser(req, res))
router.delete('/delete/:id',(req, res) => userControler.deleteUser(req, res))

module.exports = router