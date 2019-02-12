var express = require('express')
var router = express.Router();

const Item = require('../model/firstmodel');
const Form1 = require('../model/form1');


//Form1 - Commission rogatoire

//retrieving data from database

router.get('/form1list',(req,res,next)=>{
  Form1.find(function(err,form1){
    if(err){
      res.json(err);
    }
    else{
      res.json(form1);
    }
  });
})


//inserting new data

router.post('/form1',(req,res,next)=>{
  let newForm1 = new Form1({
    form1Prenom: req.body.form1Prenom,
    form1Nom: req.body.form1Nom,
    form1LieuDate: req.body.form1LieuDate,
    form1AutoriteJudiciaire: req.body.form1AutoriteJudiciaire,
    form1PresenteePar: req.body.form1PresenteePar,
    form1Traite: req.body.form1Traite,
    form1InfoPersonneSujetteProcedure: req.body.form1InfoPersonneSujetteProcedure,
    form1FaitsPrevenus: req.body.form1FaitsPrevenus,
    form1ResumeDesFaits: req.body.form1ResumeDesFaits,
    form1QualificationJuridiqueDesFaits: req.body.form1QualificationJuridiqueDesFaits,
    form1ObjetDeLaRequete: req.body.form1ObjetDeLaRequete,
    form1Sujet: req.body.form1Sujet,
    form1Statut: req.body.form1Statut
  })
  newForm1.save((err,form1)=>{
    if(err){
      res.json(err);
    }
    else{
      res.json({msg: 'Form has been added succesfully'})
    }
  })
});


//updating the data

router.put('/form1/:id',(req,res,next)=>{
  Form1.findOneAndUpdate({_id: req.params.id},{
    $set:{
      form1Prenom: req.body.form1Prenom,
      form1Nom: req.body.form1Nom,
      form1LieuDate: req.body.form1LieuDate,
      form1AutoriteJudiciaire: req.body.form1AutoriteJudiciaire,
      form1PresenteePar: req.body.form1PresenteePar,
      form1Traite: req.body.form1Traite,
      form1InfoPersonneSujetteProcedure: req.body.form1InfoPersonneSujetteProcedure,
      form1FaitsPrevenus: req.body.form1FaitsPrevenus,
      form1ResumeDesFaits: req.body.form1ResumeDesFaits,
      form1QualificationJuridiqueDesFaits: req.body.form1QualificationJuridiqueDesFaits,
      form1ObjetDeLaRequete: req.body.form1ObjetDeLaRequete,
      form1Sujet: req.body.form1Sujet
    }
  },
  function(err, result){
    if(err){
      res.json(err);
    }
    else{
      res.json(result);
    }
  }
)
})


//daleting the data

router.delete('/form1/:id',(req,res,next)=>{
  Form1.remove({_id: req.params.id}, function(err,result){
    if(err){
      res.json(err);
    }
    else{
      res.json(result);
    }
  });
});



//Item

//retrieving data from database

router.get('/items',(req,res,next)=>{
  Item.find(function(err,items){
    if(err){
      res.json(err);
    }
    else{
      res.json(items);
    }
  });
})


//inserting new data

router.post('/item',(req,res,next)=>{
  let newItem = new Item({
    itemName: req.body.itemName,
    itemQuantity: req.body.itemQuantity,
    itemBought: req.body.itemBought
  })
  newItem.save((err,item)=>{
    if(err){
      res.json(err);
    }
    else{
      res.json({msg: 'Item has been added succesfully'})
    }
  })
});


//updating the data

router.put('/item/:id',(req,res,next)=>{
  Item.findOneAndUpdate({_id: req.params.id},{
    $set:{
      itemName: req.body.itemName,
      itemQuantity: req.body.itemQuantity,
      itemBought: req.body.itemBought
    }
  },
  function(err, result){
    if(err){
      res.json(err);
    }
    else{
      res.json(result);
    }
  }
)
})


//daleting the data

router.delete('/item/:id',(req,res,next)=>{
  Item.remove({_id: req.params.id}, function(err,result){
    if(err){
      res.json(err);
    }
    else{
      res.json(result);
    }
  });
});

module.exports = router;
