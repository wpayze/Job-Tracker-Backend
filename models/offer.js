var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var OfferSchema = new Schema({
  title : {
    type: String,
    required: true
  },
  localization: {
    type: String
  },
  salary: {
      type: Number
  },

}, { timestamps: true });

module.exports = mongoose.model('Offer', OfferSchema);