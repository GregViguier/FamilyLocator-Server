
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var locationSchema = new Schema({
    name: String,
    lat: Number,
    lng: Number,
    date: { type: Date, default: Date.now }
});

mongoose.model('Location', locationSchema);