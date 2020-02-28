var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var LoginSchema = new Schema({
    user_id: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    origin: {
        type: String,
        required: true
    }
}, { timestamps: true });

module.exports = mongoose.model('Login', LoginSchema);