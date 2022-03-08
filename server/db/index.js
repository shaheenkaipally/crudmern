const mongoose = require('mongoose')

mongoose
    .connect('mongodb+srv://shaheen:shaheen@cluster0.1bg6p.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', { useNewUrlParser: true })
    .catch(e => {
        console.error('Connection error', e.message)
    })

const db = mongoose.connection

module.exports = db
