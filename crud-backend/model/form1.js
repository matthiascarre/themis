const mongoose = require('mongoose');

const Form1Schema = mongoose.Schema({
  form1Prenom: {
    type : String,
    required: false
  },
  form1Nom: {
    type: String,
    required: false
  },
  form1LieuDate: {
    type: String,
    required: false
  },
  form1AutoriteJudiciaire: {
    type: String,
    required: false
  },
  form1PresenteePar: {
    type: String,
    required: false
  },
  form1Traite: {
    type: String,
    required: false
  },
  form1InfoPersonneSujetteProcedure: {
    type: String,
    required: false
  },
  form1FaitsPrevenus: {
    type: String,
    required: false
  },
  form1ResumeDesFaits: {
    type: String,
    required: false
  },
  form1QualificationJuridiqueDesFaits: {
    type: String,
    required: false
  },
  form1ObjetDeLaRequete: {
    type: String,
    required: false
  },
  form1Sujet: {
    type: String,
    required: false
  },
  form1DateLastModified: {
    type: String,
    required: false
  },
  form1Statut: {
    type: String,
    required: true
  },
});

const Form1 = module.exports = mongoose.model('Form1', Form1Schema);
