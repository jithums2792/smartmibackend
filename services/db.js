const mongoose = require('mongoose');
const url = "mongodb://127.0.0.1:27017/smartmi";

mongoose.connect(
  url,
  { useUnifiedTopology: true, useNewUrlParser: true },
  (err) => console.log(err)
);