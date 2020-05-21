const mongoose = require('mongoose');
const schema = mongoose.Schema;
const unit = new schema({
    name: {type: String, required: true},
    symbol: {type: String, required: true}
})

const unitModel = mongoose.model('units',unit)
module.exports = unitModel