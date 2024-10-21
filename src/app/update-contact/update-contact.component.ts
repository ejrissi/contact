import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Contact } from '../model/contact.model';
import { Categorie } from '../model/categorie.model';
import { ServiceService } from '../services/service.service';

@Component({
  selector: 'app-update-contact',
  templateUrl: './update-contact.component.html',
  styles: ``
})
export class UpdateContactComponent {

  curcontact=new Contact();
  categories! : Categorie[];
updatedCatId! : number;


  constructor(private route:ActivatedRoute,
    private rou:Router,
    private ser:ServiceService)
  {

  }

  ngOnInit(): void {
    this.categories = this.ser.listeCategories();
   this.curcontact=this.ser.consultercontact(this.route.snapshot.params['id']);
   this.updatedCatId=this.curcontact.categorie.idCat;
  }


    

  updateContact()
{

  this.curcontact.categorie=this.ser.consulterCategorie(this.updatedCatId)

  this.ser.updatecontact(this.curcontact);

 
this.rou.navigate(['contact']);


}


}
