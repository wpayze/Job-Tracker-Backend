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
  website : {
    type: String
  },
  profile_picture : {
    type: String
  },
  city : {
    type: String,
    requred: true
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

  //Agregar categoria
}, { timestamps: true });

module.exports = mongoose.model('Candidate', CandidateSchema);