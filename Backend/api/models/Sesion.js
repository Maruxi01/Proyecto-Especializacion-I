const { Schema, model } = require('mongoose');

const Sesion = new Schema({
 id: { type: Number, required: true },
 date: { type: Date, required: true },
 score: { type: Number, required: true },
 duration: {type: Number,required: true }
}, {
 timestamps: true
});

module.exports = model('Sesion',Sesion);