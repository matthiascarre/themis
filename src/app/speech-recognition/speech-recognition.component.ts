import { Component, OnInit } from '@angular/core';
import { SpeechRecognitionService } from '../speechrecognitionservice.service';
import {DataService} from '../data.service';
import {ApplyIntentService} from '../applyintentservice.service';
import {ActivatedRoute,Router} from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-speech-recognition',
  templateUrl: './speech-recognition.component.html',
  styleUrls: ['./speech-recognition.component.css'],
  providers: [DataService]
})
export class SpeechRecognitionComponent implements OnInit {
  showSearchButton: boolean;
  speechData: string;
  isListenning: boolean=false;
  buttonText: string = "Activer reconnaissance vocale";

  scorestring:string;

  private intentRef: Subscription = null;
  private audioRecogReactivation: Subscription = null;

  constructor(public intent:ApplyIntentService , private speechRecognitionService: SpeechRecognitionService, private dataService: DataService, private router: Router) {
      this.showSearchButton = true;
      this.speechData = "";
  }

  ngOnInit() {
    this.intentRef = this.intent.IntentMessage.subscribe((text)=>{
      if(text=="Arret Speech Rec"){
        this.stopVoiceRecog();
      }
      if(text=="Activer Speech Rec Sujet"){
        this.stopVoiceRecog();
      }
      if(text=="Réactiver reconnaissance vocale"){
        if(this.isListenning==true){
          console.log("Incohérence bug à corriger");
        }
        else{
          this.activateSpeechSearchMovie()
          console.log("Reconnaissance vocale générale réactivée.")
        }
        this.stopVoiceRecog();
      }
    },
    (err)=>{
      console.log("Erreur lors du traitement de l'intent.");
    });
  }

  ngOnDestroy() {
      this.speechRecognitionService.DestroySpeechObject();
  }

  buttonClick(): void {
    if(this.isListenning == false){
      this.activateSpeechSearchMovie()
    }
    else{
      this.stopVoiceRecog()

    }
  }

  activateSpeechSearchMovie(): void {
      this.isListenning = true;
      this.buttonText = "Stopper la reconnaissance vocale"

      this.speechRecognitionService.record()
          .subscribe(
          //listener
          (value) => {
              this.speechData = value;
              console.log(value);
              this.dataService.getLuisIntent(value)
              .subscribe(intent =>{
                console.log("L'intent est : " + intent.topScoringIntent.intent);
                console.log("Son score est : " + intent.topScoringIntent.score);
                this.scorestring=intent.topScoringIntent.score.toString();
                if (parseFloat(this.scorestring)<0.7){
                  console.log("Score insuffisant : " + this.scorestring)
                  this.intent.applyIntent("None");
                }
                else {
                  this.intent.applyIntent(intent.topScoringIntent.intent);
                }
              });


          },
          //error
          (err) => {
              console.log(err);
              if (err.error == "no-speech") {
                  console.log("--restarting service--");
                  this.activateSpeechSearchMovie();
              }
          },
          //completion
          () => {
              this.showSearchButton = true;
              console.log("--complete--");
              //this.activateSpeechSearchMovie();
          });
  }


  stopVoiceRecog(){
    this.isListenning = false;
    this.buttonText = "Activer la reconnaissance vocale"
    this.speechRecognitionService.DestroySpeechObject();
    console.log("Stopped listenning!")
  }




}
