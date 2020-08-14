
const mongoose = require('mongoose')
//Event object constructor




const EventShema = new mongoose.Schema({




    titre: { type: String, required: true },
    Date_Debut: { type: String, required: true },
    Date_fin: { type: String },
    Adresse: { type: String, required: true },
    description: { type: String, required: true },
    prix: { type: String, required: true },
    affiche: { type: String, required: true },
    nombre_de_place: { type: String, required: true },
    nombre_de_participant: { type: String, required: true },
    nom_categorie: { type: String, required: true },
    nom_organzateur: { type: String, required: true },





});
const Event = mongoose.model("Evenement", EventShema);
module.exports = Event
