var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var bcrypt = require('bcrypt');

var UserSchema = new Schema({
    password: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    type: { //1: Candidato, 2: Empresa 
        type: Number,
        required: true     
    },
    company: {
        type: Schema.Types.ObjectId,
        ref: 'Company',
    },
    candidate: {
        type: Schema.Types.ObjectId,
        ref: 'Candidate',
    }
});

UserSchema.pre('save', function (next) {
    var user = this;

    if (this.isModified('password') || this.isNew) {
        bcrypt.genSalt(10, (err, salt) => {
            if (err) {
                return next(err);
            }
            bcrypt.hash(user.password, salt, (err, hash) => {
                if (err) {
                    return next(err);
                }
                user.password = hash;
                next();
            });
        });
    } else {
        return next();
    }
});

module.exports = mongoose.model('User', UserSchema);