var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var OfferSchema = new Schema({
  title : {
    type: String,
    required: true
  },
  location: {
    type: String
  },
  salary: {
      type: Number
  },
  company: {
    type: Schema.Types.ObjectId,
    ref: 'Company',
  }
}, { timestamps: true });

module.exports = mongoose.model('Offer', OfferSchema);