var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var CompanySchema = new Schema({
  name : {
    type: String,
    required: true
  },
  address : {
    type: String
  },
  website : {
    type: String
  },
  logo : {
    type: String
  },
  rating : {
    type: Number
  },
  linkedin : {
    type: String
  },
  facebook : {
    type: String
  },
  twitter : {
    type: String
  }
}, { timestamps: true });

module.exports = mongoose.model('Company', CompanySchema);