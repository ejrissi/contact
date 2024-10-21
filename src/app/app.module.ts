import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactComponent } from './contact/contact.component';
import { AddContactComponent } from './add-contact/add-contact.component';
import { FormsModule } from '@angular/forms';
import { UpdateContactComponent } from './update-contact/update-contact.component';
import { ServiceService } from './services/service.service';
import { RechercheParCategorieComponent } from './recherche-par-categorie/recherche-par-categorie.component';





@NgModule({
  declarations: [
    AppComponent,
    ContactComponent,
   
    AddContactComponent,
   UpdateContactComponent,
   RechercheParCategorieComponent,
   
   
   
  


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [ ServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
