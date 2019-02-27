import { Component, OnInit } from '@angular/core';
import { SpeechRecognitionService } from '../speechrecognitionservice.service';
import {DataService} from '../data.service';
import {ActivatedRoute,Router} from '@angular/router';

@Component({
  selector: 'app-speech-recognition',
  templateUrl: './speech-recognition.component.html',
  styleUrls: ['./speech-recognition.component.css'],
  providers: [DataService]
})
export class SpeechRecognitionComponent implements OnInit {
  showSearchButton: boolean;
  speechData: string;
  //intent: string;

  constructor(private speechRecognitionService: SpeechRecognitionService, private dataService: DataService, private router: Router) {
      this.showSearchButton = true;
      this.speechData = "";
  }

  ngOnInit() {
      console.log("hello")
  }

  ngOnDestroy() {
      this.speechRecognitionService.DestroySpeechObject();
  }

  activateSpeechSearchMovie(): void {
      this.showSearchButton = false;

      this.speechRecognitionService.record()
          .subscribe(
          //listener
          (value) => {
              this.speechData = value;
              console.log(value);
              this.dataService.getLuisIntent(value)
              .subscribe(intent =>{
                console.log("L'intent est : " + intent.topScoringIntent.intent);
                this.applyIntent(intent.topScoringIntent.intent);
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
              this.activateSpeechSearchMovie();
          });
  }


  applyIntent(intent){
    console.log("On applique l'intent " + intent)
    if(intent == "Ouvrir Formulaire"){
      console.log("Boucle if intent=Ouvrir Formulaire")
      this.router.navigateByUrl('/formulaire1/new');
    }
    else if(intent == "Retour Accueil"){
      this.router.navigateByUrl('');
    }
    else if(intent == "Ouvrir A Propos"){
      this.router.navigateByUrl('/about');
    }

    else if(intent == "Ouvrir Liste Documents"){
      this.router.navigateByUrl('/liste-documents');
    }
    else{
      console.log("Intent non reconnu.")
    }
  }




}
