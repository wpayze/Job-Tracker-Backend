var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var FavoriteOfferSchema = new Schema({
    user_id: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    offer_id: {
        type: Schema.Types.ObjectId,
        ref: 'Offer'
    }
}, { timestamps: true });

module.exports = mongoose.model('FavoriteOffer', FavoriteOfferSchema);