import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {Routes,RouterModule} from '@angular/router';
import { HttpModule} from "@angular/http";
import {FormsModule} from '@angular/forms';
import {MatDialogModule} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { NavigationbarComponent } from './navigationbar/navigationbar.component';
import { AccueilComponent } from './accueil/accueil.component';
import { Formulaire1Component } from './formulaire1/formulaire1.component';
import { DialogExample } from './formulaire1/formulaire1.component';
import { Formulaire2Component } from './formulaire2/formulaire2.component';
import { AboutComponent } from './about/about.component';
import { CommissionRogatoireComponent } from './commission-rogatoire/commission-rogatoire.component';
import { FormlistComponent } from './formlist/formlist.component';
import { SpeechRecComponent } from './speech-rec/speech-rec.component';
import { SpeechRecognitionComponent } from './speech-recognition/speech-recognition.component';

const ROUTES: Routes=[
  {path:"",component:AccueilComponent},
  {path:"formulaire1/:id",component:Formulaire1Component},
  {path:"formulaire2",component:Formulaire2Component},
  {path:"about",component:AboutComponent},
  {path:"liste-documents",component:FormlistComponent},
]



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavigationbarComponent,
    AccueilComponent,
    Formulaire1Component,
    Formulaire2Component,
    AboutComponent,
    CommissionRogatoireComponent,
    FormlistComponent,
    SpeechRecComponent,
    SpeechRecognitionComponent,
    DialogExample
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(ROUTES),
    HttpModule,
    FormsModule,
    MatDialogModule,
    BrowserAnimationsModule
  ],
  entryComponents: [DialogExample],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
