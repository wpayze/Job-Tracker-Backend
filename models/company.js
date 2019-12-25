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
  logo : {
    type: String
  },
  rating : {
    type: Number
  },
  social_media: {
    type: Object
  },
  location: {
    type: Object
  }
}, { timestamps: true });

module.exports = mongoose.model('Company', CompanySchema);