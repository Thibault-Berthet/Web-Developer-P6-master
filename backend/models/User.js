/* ------------ JS du modèle utilisateur ------------ */

// Importation des outils mongoose
const mongoose = require('mongoose')
const uniqueValidator = require('mongoose-unique-validator')

// Schema des données d'un utilisateur
const userSchema = mongoose.Schema({
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true }
})

userSchema.plugin(uniqueValidator)

module.exports = mongoose.model('User', userSchema)