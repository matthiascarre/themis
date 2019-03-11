import { Injectable} from '@angular/core';
import {ActivatedRoute,Router} from '@angular/router';
import {Subject} from 'rxjs/Subject';


@Injectable({
  providedIn: 'root'
})
export class ApplyIntentService {



  private IntentSource = new Subject<string>();
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
      this.IntentSource.next("Sauvegarder formulaire");
    }
    else if(intent == "Arret Speech Rec"){
      this.IntentSource.next("Arret Speech Rec");
    }
    else if(intent == "Activer Speech Rec Sujet"){
      this.IntentSource.next("Activer Speech Rec Sujet");
    }
    else{
      console.log("Intent non reconnu.")
    }
  }

}
