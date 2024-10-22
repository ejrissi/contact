import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { AddContactComponent } from './add-contact/add-contact.component';
import { UpdateContactComponent } from './update-contact/update-contact.component';
import { RechercheParCategorieComponent } from './recherche-par-categorie/recherche-par-categorie.component';



const routes: Routes = [
  {path:'contact', component:ContactComponent},
  {path:'add', component:AddContactComponent},
  {path: "updatecontact/:id", component: UpdateContactComponent},
  {path:"search by category",component:RechercheParCategorieComponent},
 
  { path: "", redirectTo: "contact", pathMatch: "full" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
