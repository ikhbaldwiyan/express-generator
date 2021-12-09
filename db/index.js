const mongoose = require('mongoose');
const { urlDb } = require('../config');

mongoose.connect(urlDb, {
    useNewUrlParser: true,
    useFindAndModify: true,
    useUnifiedTopology: true
});

const db = mongoose.connection

module.exports = db