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
  location: {
    type: Object
  },
  profile_picture : {
    type: String
  },
  city : {
    type: String,
    requred: true
  },
  social_media: {
    type: Object
  }

  //Agregar categoria
}, { timestamps: true });

module.exports = mongoose.model('Candidate', CandidateSchema);