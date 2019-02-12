import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {Routes,RouterModule} from '@angular/router';
import { HttpModule} from "@angular/http";
import {FormsModule} from '@angular/forms';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { NavigationbarComponent } from './navigationbar/navigationbar.component';
import { AccueilComponent } from './accueil/accueil.component';
import { Formulaire1Component } from './formulaire1/formulaire1.component';
import { Formulaire2Component } from './formulaire2/formulaire2.component';
import { AboutComponent } from './about/about.component';
import { CommissionRogatoireComponent } from './commission-rogatoire/commission-rogatoire.component';
import { FormlistComponent } from './formlist/formlist.component';

const ROUTES: Routes=[
  {path:"",component:AccueilComponent},
  {path:"formulaire1",component:Formulaire1Component},
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
    FormlistComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(ROUTES),
    HttpModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
