const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Vaccine = new Schema(
    {
        site: { type: String, required: true },
        time: { type: [String], required: true },
        cardnumber: { type: Number, required: false },
        priority: { type: String, required: true },
        cancelled: { type: String, required: true },
    },
    { timestamps: true },
)

module.exports = mongoose.model('vaccines', Vaccine)
