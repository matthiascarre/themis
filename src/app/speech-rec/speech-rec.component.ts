import { Component, OnInit } from '@angular/core';
import { AudioRecordingService } from '../audio-recording-service.service';

@Component({
  selector: 'app-speech-rec',
  templateUrl: './speech-rec.component.html',
  styleUrls: ['./speech-rec.component.css'],
  providers: [AudioRecordingService]
})
export class SpeechRecComponent implements OnInit {

  recording: any;
  recordingTime: any;
  islistenning: boolean=false;


  constructor(private audioRecording: AudioRecordingService) {
  }

  ngOnInit() {
  }



  startRecord(){
    if(this.islistenning==false){
      console.log("Enregistrement lancé!")
      this.audioRecording.startRecording()
      this.islistenning=true
    }
    else{
      console.log("Enregistrement arrêté!")
      this.audioRecording.stopRecording()
      this.islistenning=false
      this.audioRecording.getRecordedBlob()
      .subscribe(recording =>{
        this.recording = recording;
      });
      this.audioRecording.getRecordedTime()
      .subscribe(recordingTime =>{
        this.recordingTime = recordingTime;
      });
      console.log(this.recordingTime);
      console.log("Recording: " + this.recording);
      console.log(typeof this.recording);
    }

  }




}
