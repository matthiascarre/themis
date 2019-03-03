import { Component, OnInit } from '@angular/core';
import { SpeechRecognitionService } from '../speechrecognitionservice.service';
import {DataService} from '../data.service';
import {ApplyIntentService} from '../applyintentservice.service';
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

  constructor(private applyIntentService: ApplyIntentService ,private speechRecognitionService: SpeechRecognitionService, private dataService: DataService, private router: Router) {
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
                this.applyIntentService.applyIntent(intent.topScoringIntent.intent);
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

}
