var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var CandidateSchema = new Schema({
  name : {
    type: String,
    required: true
  },
  address : {
    type: String
  },
  desired_job: {
    type: String
  },
  profile_picture : { //URL
    type: String
  },
  cv: { //URL
    type: String
  },
  city : {
    type: String,
    requred: true
  },
  social_media: {
    type: Object
  },
  category: {
    type: Schema.Types.ObjectId,
    ref: 'Category',
  }

}, { timestamps: true });

module.exports = mongoose.model('Candidate', CandidateSchema);