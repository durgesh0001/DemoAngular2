'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;
mongoose.connect('mongodb://localhost/tmcore');

var UserSchema = new Schema({
    firstname: String,
    email: { type: String, lowercase: true },
    password: String,
    username: String,
});


module.exports = mongoose.model('User', UserSchema);
/**
 * Created by root on 28/12/16.
 */
