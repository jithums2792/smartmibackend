const mongoose = require('mongoose');
const schema = mongoose.Schema;
const manufature = new schema({
    name: {type: String, required: true},
    logo: {type: String, required: true},
    website: {type: String},
    active: {type: Boolean, required: true}
})

const manufatureModel = mongoose.model('manufatures',manufature)
module.exports = manufatureModel