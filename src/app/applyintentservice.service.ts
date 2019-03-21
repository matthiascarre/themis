import { Injectable} from '@angular/core';
import {ActivatedRoute,Router} from '@angular/router';
import {Subject} from 'rxjs/Subject';


@Injectable({
  providedIn: 'root'
})
export class ApplyIntentService {



  public IntentSource = new Subject<string>();
  public IntentMessage = this.IntentSource.asObservable();


  constructor(private router: Router) { }

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
    else if(intent == "Sauvegarder formulaire"){
      this.sendMessage("Sauvegarder formulaire");
    }
    else if(intent == "Arret Speech Rec"){
      this.sendMessage("Arret Speech Rec");
    }
    else if(intent == "Activer Reconnaissance Vocale Sujet"){
      this.sendMessage("Activer Speech Rec Sujet");
    }
    else if(intent == "None"){
      console.log("Intent non reconnu.")
    }
    else{
      console.log("Intent non reconnu.")
    }
  }

  sendMessage(string){
    this.IntentSource.next(string);
  }

}
