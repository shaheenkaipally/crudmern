const express = require('express')

const VaccineCtrl = require('../controllers/vaccine-ctrl')

const router = express.Router()

router.post('/vaccine', VaccineCtrl.createVaccine)
router.put('/vaccine/:id', VaccineCtrl.updateVaccine)
router.delete('/vaccine/:id', VaccineCtrl.deleteVaccine)
router.get('/vaccine/:id', VaccineCtrl.getVaccineById)
router.get('/vaccines', VaccineCtrl.getVaccines)

module.exports = router
