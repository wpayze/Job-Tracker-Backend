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
      type: Object
  },
  company: {
    type: Schema.Types.ObjectId,
    ref: 'Company',
  },
  skills: {
    type: [String]
  },
  description: {
    type: String
  },
  responsabilities: {
    type: String
  },
  schedule: {
    type: String
  },
  contract: {
    type: String
  },
  category: {
    type: Schema.Types.ObjectId,
    ref: 'Category',
  },
  tags: {
    type: [Schema.Types.ObjectId],
    ref: 'Tag',
  }

}, { timestamps: true });

module.exports = mongoose.model('Offer', OfferSchema);