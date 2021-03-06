import { Component, OnInit, Inject } from '@angular/core';
import {Form1} from '../form1';
import {DataService} from '../data.service';
import {ApplyIntentService} from '../applyintentservice.service';
import {ActivatedRoute,Router} from '@angular/router';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { Subscription } from 'rxjs/Subscription';
import { SpeechRecognitionService } from '../speechrecognitionservice.service';



export interface DialogData {
  message: string;
}

@Component({
  selector: 'app-formulaire1',
  templateUrl: './formulaire1.component.html',
  styleUrls: ['./formulaire1.component.css'],
  providers: [DataService]
})

export class Formulaire1Component implements OnInit {
  form1Prenom: string;
  form1Nom: string;
  form1LieuDate: string;
  form1AutoriteJudiciaire: string;
  form1PresenteePar: string;
  form1Traite: string;
  form1InfoPersonneSujetteProcedure: string;
  form1FaitsPrevenus: string;
  form1ResumeDesFaits: string;
  form1QualificationJuridiqueDesFaits: string;
  form1ObjetDeLaRequete: string;
  form1Sujet: string;
  form1Statut: string;
  id: string;
  Form: Form1;
  booleantest: boolean= false;
  popupmessage: string;

  speechData: string;
  speechDataList: string[];
  isListenning: boolean=false;

  private intentRef: Subscription = null;



  constructor(private speechRecognitionService: SpeechRecognitionService, public intent:ApplyIntentService, public dialog: MatDialog, private dataService: DataService, private router: Router, private route: ActivatedRoute) {
    this.route.params.subscribe( params => this.id=params.id )
    console.log("Id du document: "+this.id)
  }

  ngOnInit() {
    this.intentRef = this.intent.IntentMessage.subscribe((text)=>{
      if(text=="Sauvegarder formulaire"){
        this.addFormBrouillon();
      }
      if(text=="Activer Speech Rec Sujet"){
        this.isListenning = true;
        let el = document.getElementById("form1Sujet");
        el.scrollIntoView({behavior:"smooth"});
        this.startAudioRecog();
      }
    },
    (err)=>{
      console.log("Erreur lors du traitement de l'intent.");
    });
    if(this.id=="new"){
      console.log("Creating new document")
      this.form1Prenom = "";
      this.form1Nom = "";
      this.form1LieuDate = "";
      this.form1AutoriteJudiciaire = "";
      this.form1PresenteePar = "";
      this.form1Traite = "";
      this.form1InfoPersonneSujetteProcedure = "";
      this.form1FaitsPrevenus = "";
      this.form1ResumeDesFaits = "";
      this.form1QualificationJuridiqueDesFaits = "";
      this.form1ObjetDeLaRequete = "";
      this.form1Sujet = "";
      this.form1Statut = "Brouillon";
    }
    else{
      console.log("Loading data from database");
      this.getDocument()
    }
  }

  addFormBrouillon(){
    if(this.id=="new"){
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
        this.popupmessage = "Formulaire bien sauvegardé.";
        this.openDialog();
        this.router.navigateByUrl('/liste-documents');
      },
      (err) => {
        this.popupmessage = "Erreur lors de la sauvegarde du formulaire.";
        this.openDialog();
      }
    );
    }
    else {
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
      this.dataService.updateForm1(newForm,this.id)
      .subscribe(forms =>{
        console.log(forms);
        this.popupmessage = "Formulaire bien sauvegardé.";
        this.openDialog();
        this.router.navigateByUrl('/liste-documents');
      },
      (err) => {
        this.popupmessage = "Erreur lors de la sauvegarde du formulaire.";
        this.openDialog();
      }
    );
    }
  }



  addFormComplete(){
    console.log("Prénom : " + this.form1Prenom)
    if( this.form1Prenom=="" || this.form1Nom=="" || this.form1LieuDate=="" || this.form1AutoriteJudiciaire=="" || this.form1PresenteePar=="" || this.form1Traite=="" || this.form1InfoPersonneSujetteProcedure=="" || this.form1FaitsPrevenus=="" || this.form1ResumeDesFaits=="" || this.form1QualificationJuridiqueDesFaits=="" || this.form1ObjetDeLaRequete=="" || this.form1Sujet==""){
      console.log("Données manquantes");
      this.popupmessage = "Certaines données n'ont pas été renseignées."
      this.openDialog();
    }
    else if(this.form1Prenom == null || this.form1Nom == null || this.form1LieuDate == null || this.form1AutoriteJudiciaire == null || this.form1PresenteePar == null || this.form1Traite == null || this.form1InfoPersonneSujetteProcedure == null || this.form1FaitsPrevenus == null || this.form1ResumeDesFaits == null || this.form1QualificationJuridiqueDesFaits == null || this.form1ObjetDeLaRequete == null || this.form1Sujet == null){
      console.log("Données manquantes");
      this.popupmessage = "Certaines données n'ont pas été renseignées."
      this.openDialog();
    }
    else if(this.id=="new"){
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
        this.popupmessage = "Formulaire bien sauvegardé."
        this.openDialog();
        this.router.navigateByUrl('/liste-documents');
      },
      (err) => {
        this.popupmessage = "Erreur lors de la sauvegarde du formulaire.";
        this.openDialog();
      }
    );
    }
    else {
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
      this.dataService.updateForm1(newForm,this.id)
      .subscribe(forms =>{
        console.log(forms);
        this.popupmessage = "Formulaire bien sauvegardé.";
        this.openDialog();
        this.router.navigateByUrl('/liste-documents');
      },
      (err) => {
        this.popupmessage = "Erreur lors de la sauvegarde du formulaire.";
        this.openDialog();
      }
    );
    }

  }


  getDocument(){
    this.dataService.getForm1byId(this.id)
    .subscribe(form => {
      this.Form = form[0];
      console.log('data from dataService : '+this.Form.form1Prenom);
      this.loadDataintoForm(this.Form);
    });
  }


  loadDataintoForm(form){
    this.form1Prenom = form.form1Prenom;
    this.form1Nom = form.form1Nom;
    this.form1LieuDate = form.form1LieuDate;
    this.form1AutoriteJudiciaire = form.form1AutoriteJudiciaire;
    this.form1PresenteePar = form.form1PresenteePar;
    this.form1Traite= form.form1Traite;
    this.form1InfoPersonneSujetteProcedure= form.form1InfoPersonneSujetteProcedure;
    this.form1FaitsPrevenus= form.form1FaitsPrevenus;
    this.form1ResumeDesFaits= form.form1ResumeDesFaits;
    this.form1QualificationJuridiqueDesFaits= form.form1QualificationJuridiqueDesFaits;
    this.form1ObjetDeLaRequete= form.form1ObjetDeLaRequete;
    this.form1Sujet= form.form1Sujet;
    this.form1Statut= form.form1Statut;
  }



  startAudioRecog(){
    this.speechDataList=[this.form1Sujet]
    this.speechRecognitionService.record()
        .subscribe(
        //listener
        (value) => {
            this.speechData = value;
            console.log(value);
            this.dataService.getLuisIntentWritting(value)
            .subscribe(intent =>{
              console.log("L'intent est : " + intent.topScoringIntent.intent);
              if(intent.topScoringIntent.intent=="None"){
                this.speechDataList.push(this.speechData);
                this.form1Sujet= this.concatenateStringArray(this.speechDataList);
              }
              else if(intent.topScoringIntent.intent=="Corriger phrase precedente"){
                this.speechDataList.pop();
                this.form1Sujet= this.concatenateStringArray(this.speechDataList);
              }
              else if(intent.topScoringIntent.intent=="Effacer bloque entier"){
                this.speechDataList=[];
                this.form1Sujet= "";
              }
              else if(intent.topScoringIntent.intent=="Quitter mode écriture"){
                this.stopVoiceRecog();
                this.intent.sendMessage("Réactiver reconnaissance vocale");
              }
              else{
                this.speechDataList.push(this.speechData);
                this.form1Sujet= this.concatenateStringArray(this.speechDataList);
                console.log("Boucle else -> pas censé arriver");
              }
            });
        },
        //error
        (err) => {
            console.log(err);
            if (err.error == "no-speech") {
                console.log("--restarting service--");
                this.startAudioRecog();
            }
        },
        //completion
        () => {
            console.log("--complete--");
            //this.activateSpeechSearchMovie();
        });

  }

  stopVoiceRecog(){
    this.speechRecognitionService.DestroySpeechObject();
    console.log("Stopped listenning for subject!")
  }

  concatenateStringArray(array){
    var text: string="";
    for (var i = 0; i < array.length; i++) {
      if(i==0){
        text = text + array[i];
      }
      else{
        text = text + " " + array[i];
      }
    }
    return text
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogExample, {
      data: {
            message: this.popupmessage
          },
        }
  );

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }


}

@Component({
  selector: 'dialog-example',
  templateUrl: 'dialog-example.html',
  styleUrls: ['dialog-example.css'],
})
export class DialogExample {

  constructor(@Inject(MAT_DIALOG_DATA) public data: DialogData,
  public dialogRef: MatDialogRef<DialogExample>,
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

}
