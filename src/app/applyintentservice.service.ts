import { Injectable } from '@angular/core';
import {ActivatedRoute,Router} from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

@Injectable({
  providedIn: 'root'
})
export class ApplyIntentService {

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
    else{
      console.log("Intent non reconnu.")
    }
  }




}
