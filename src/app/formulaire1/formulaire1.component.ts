import { Component, OnInit } from '@angular/core';
import {Form1} from '../form1';
import {DataService} from '../data.service';
import {ActivatedRoute,Router} from '@angular/router';

@Component({
  selector: 'app-formulaire1',
  templateUrl: './formulaire1.component.html',
  styleUrls: ['./formulaire1.component.css'],
  providers: [DataService]
})
export class Formulaire1Component implements OnInit {
  form1Prenom: string="";
  form1Nom: string="";
  form1LieuDate: string="";
  form1AutoriteJudiciaire: string="";
  form1PresenteePar: string="";
  form1Traite: string="";
  form1InfoPersonneSujetteProcedure: string="";
  form1FaitsPrevenus: string="";
  form1ResumeDesFaits: string="";
  form1QualificationJuridiqueDesFaits: string="";
  form1ObjetDeLaRequete: string="";
  form1Sujet: string="";
  form1Statut: string;
  id: string;
  FormList: Form1[]=[];
  Form: Form1={
    form1Prenom: "",
    form1Nom: "",
    form1LieuDate: "",
    form1AutoriteJudiciaire: "",
    form1PresenteePar: "",
    form1Traite: "",
    form1InfoPersonneSujetteProcedure: "",
    form1FaitsPrevenus: "",
    form1ResumeDesFaits: "",
    form1QualificationJuridiqueDesFaits: "",
    form1ObjetDeLaRequete: "",
    form1Sujet: "",
    form1Statut: ""
  };

  constructor(private dataService: DataService, private router: Router, private route: ActivatedRoute) {
    this.route.params.subscribe( params => this.id=params.id )
    console.log("Id du document: "+this.id)
  }

  ngOnInit() {
    if(this.id=="new"){
      console.log("Creating new document")
    }
    else{
      this.getDocument()
      console.log("Loading data from database");
      this.loadDataintoForm();
      console.log("Champ prénom: " + this.form1Prenom)


    }
  }

  addFormBrouillon(){
    let newForm : Form1 = {
      form1Prenom: this.form1Prenom,
      form1Nom: this.form1Nom,
      form1LieuDate: this.form1LieuDate,
      form1AutoriteJudiciaire: this.form1AutoriteJudiciaire,
      form1PresenteePar: this.form1PresenteePar,
      form1Traite: this.form1Traite,
      form1InfoPersonneSujetteProcedure: this.form1InfoPersonneSujetteProcedure,
      form1FaitsPrevenus: this.form1FaitsPrevenus,
      form1ResumeDesFaits: this.form1ResumeDesFaits,
      form1QualificationJuridiqueDesFaits: this.form1QualificationJuridiqueDesFaits,
      form1ObjetDeLaRequete: this.form1ObjetDeLaRequete,
      form1Sujet: this.form1Sujet,
      form1Statut: "Brouillon"
    }
      console.log(newForm);
      this.dataService.addForm1(newForm)
      .subscribe(forms =>{
        console.log(forms);
      });
  }



  addFormComplete(){
    console.log("Fonction addFormComplete() called")
    if(this.form1Prenom=="" || this.form1Nom=="" || this.form1LieuDate=="" || this.form1AutoriteJudiciaire=="" || this.form1PresenteePar=="" || this.form1Traite=="" || this.form1InfoPersonneSujetteProcedure=="" || this.form1FaitsPrevenus=="" || this.form1ResumeDesFaits=="" || this.form1QualificationJuridiqueDesFaits=="" || this.form1ObjetDeLaRequete=="" || this.form1Sujet==""){
      console.log("Données manquantes");
    }
    else{
      let newForm : Form1 = {
        form1Prenom: this.form1Prenom,
        form1Nom: this.form1Nom,
        form1LieuDate: this.form1LieuDate,
        form1AutoriteJudiciaire: this.form1AutoriteJudiciaire,
        form1PresenteePar: this.form1PresenteePar,
        form1Traite: this.form1Traite,
        form1InfoPersonneSujetteProcedure: this.form1InfoPersonneSujetteProcedure,
        form1FaitsPrevenus: this.form1FaitsPrevenus,
        form1ResumeDesFaits: this.form1ResumeDesFaits,
        form1QualificationJuridiqueDesFaits: this.form1QualificationJuridiqueDesFaits,
        form1ObjetDeLaRequete: this.form1ObjetDeLaRequete,
        form1Sujet: this.form1Sujet,
        form1Statut: "Complété"
      }
      console.log(newForm);
      this.dataService.addForm1(newForm)
      .subscribe(forms =>{
        console.log(forms);
      });
      this.router.navigateByUrl('/liste-documents');
    }

  }


  getDocument(){
    this.dataService.getForm1byId(this.id)
    .subscribe(form => {
      this.FormList = form;
      this.Form = this.FormList[0];
      console.log('data from dataService : '+this.Form.form1Prenom);
    });
  }


  loadDataintoForm(){
    this.form1Prenom = this.Form.form1Prenom;
    this.form1Nom = this.Form.form1Nom;
    this.form1LieuDate = this.Form.form1LieuDate;
    this.form1AutoriteJudiciaire = this.Form.form1AutoriteJudiciaire;
    this.form1PresenteePar = this.Form.form1PresenteePar;
    this.form1Traite= this.Form.form1Traite;
    this.form1InfoPersonneSujetteProcedure= this.Form.form1InfoPersonneSujetteProcedure;
    this.form1FaitsPrevenus= this.Form.form1FaitsPrevenus;
    this.form1ResumeDesFaits= this.Form.form1ResumeDesFaits;
    this.form1QualificationJuridiqueDesFaits= this.Form.form1QualificationJuridiqueDesFaits;
    this.form1ObjetDeLaRequete= this.Form.form1ObjetDeLaRequete;
    this.form1Sujet= this.Form.form1Sujet;
  }


}
