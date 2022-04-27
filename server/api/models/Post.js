var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var PostSchema = new Schema({
    title: {
        type: String, required: 'Titre'
    },
    title_description: {
        type: String, required: 'Titre description'
    },
    image: {
        type: String,
    },
    contenu: {
        type: String, required: 'Contenu'
    },
    created: {
        type: Date, default: Date.now
    },
    updated: {
        type: Date, default: Date.now
    },
});

module.exports = mongoose.model('Posts', PostSchema);