const mongoose = require("mongoose");
const schema = mongoose.Schema;
const company = new schema({
  name: { type: String, required: true },
  code: { type: String, required: true },
  phone: { type: Number, required: true },
  email: { type: String, required: true },
  fax: { type: String },
  website: { type: String },
  country: { type: String, required: true },
  address1: { type: String, required: true },
  address2: { type: String, required: true },
  logo: { type: String, required: true },
  header: { type: String, required: true },
  footer: { type: String, required: true },
  status: { type: Boolean, required: true },
  report: { type: Boolean, required: true },
  color: { type: String, required: true },
});
const companyModel = mongoose.model('companies', company)
module.exports = companyModel
