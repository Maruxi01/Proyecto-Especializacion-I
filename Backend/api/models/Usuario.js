const { Schema, model} = require('mongoose');

const Usuario = new Schema({
    id: {type: Number, required: true},
    username: {type:String,required: true},
    password: {type: String, required: true},
    sessions:[{type: Schema.ObjectId ,ref: 'Sesion'}]
}, {
    timestamps: true
   });

   module.exports = model('Usuario',Usuario)
   