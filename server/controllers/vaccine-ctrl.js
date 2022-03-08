const Vaccine = require('../models/vaccine-model')

createVaccine = (req, res) => {
    const body = req.body

    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'You must provide appoinment',
        })
    }

    const vaccine = new Vaccine(body)

    if (!vaccine) {
        return res.status(400).json({ success: false, error: err })
    }

    vaccine
        .save()
        .then(() => {
            return res.status(201).json({
                success: true,
                id: vaccine._id,
                message: 'Vaccine created!',
            })
        })
        .catch(error => {
            return res.status(400).json({
                error,
                message: 'Vaccine not created!',
            })
        })
}

updateVaccine = async (req, res) => {
    const body = req.body

    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'You must provide a body to update',
        })
    }

    Vaccine.findOne({ _id: req.params.id }, (err, vaccine) => {
        if (err) {
            return res.status(404).json({
                err,
                message: 'Vaccine not found!',
            })
        }
        vaccine.site = body.site
        vaccine.time = body.time
        vaccine.cardnumber = body.cardnumber
        vaccine
            .save()
            .then(() => {
                return res.status(200).json({
                    success: true,
                    id: vaccine._id,
                    message: 'Vaccine updated!',
                })
            })
            .catch(error => {
                return res.status(404).json({
                    error,
                    message: 'Vaccine not updated!',
                })
            })
    })
}

deleteVaccine = async (req, res) => {
    await Vaccine.findOneAndDelete({ _id: req.params.id }, (err, vaccine) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }

        if (!vaccine) {
            return res
                .status(404)
                .json({ success: false, error: `Vaccine not found` })
        }

        return res.status(200).json({ success: true, data: vaccine })
    }).catch(err => console.log(err))
}

getVaccineById = async (req, res) => {
    await Vaccine.findOne({ _id: req.params.id }, (err, vaccine) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }

        return res.status(200).json({ success: true, data: vaccine })
    }).catch(err => console.log(err))
}

getVaccines = async (req, res) => {
    await Vaccine.find({}, (err, vaccines) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }
        if (!vaccines.length) {
            return res
                .status(404)
                .json({ success: false, error: `Vaccine not found` })
        }
        return res.status(200).json({ success: true, data: vaccines })
    }).catch(err => console.log(err))
}

module.exports = {
    createVaccine,
    updateVaccine,
    deleteVaccine,
    getVaccines,
    getVaccineById,
}
