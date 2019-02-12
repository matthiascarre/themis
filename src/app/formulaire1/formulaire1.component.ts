import { Component, OnInit } from '@angular/core';
import {Form1} from '../form1';
import {DataService} from '../data.service';
import {Router} from '@angular/router';

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

  constructor(private dataService: DataService, private router: Router) {
  }

  ngOnInit() {
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


}
