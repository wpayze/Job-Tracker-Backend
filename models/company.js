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
  location: {
    type: Object
  },
  logo : {
    type: String
  },
  rating : {
    type: Number,
    default: 0
  },
  social_media: {
    type: Object
  }
}, { timestamps: true });

module.exports = mongoose.model('Company', CompanySchema);