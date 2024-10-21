import { Component } from '@angular/core';
import { Contact } from '../model/contact.model';

import { ActivatedRoute, Router } from '@angular/router';
import { Categorie } from '../model/categorie.model';
import { ServiceService } from '../services/service.service';

@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styleUrl: './add-contact.component.css',
})
export class AddContactComponent {
  categories!: Categorie[];
  newIdCat!: number;
  newCategorie!: Categorie;

  newcontact = new Contact();
  rout: any;

  constructor(
    private addon: ServiceService,
    private route: ActivatedRoute,
    private rou: Router
  ) {}


  ngOnInit() {
    this.categories = this.addon.listeCategories();
    }
    

    
      
  addContact() {
    this.newCategorie=this.addon.consulterCategorie(this.newIdCat);
    this.newcontact.categorie=this.newCategorie;
    this.addon.addcontact(this.newcontact);
    this.rou.navigate(['contact']);
  }
}
