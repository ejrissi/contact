import { Component } from '@angular/core';
import { Contact } from '../model/contact.model';
import { ServiceService } from '../services/service.service';
import { Categorie } from '../model/categorie.model';

@Component({
  selector: 'app-recherche-par-categorie',
  templateUrl: './recherche-par-categorie.component.html',
  styles: ``
})
export class RechercheParCategorieComponent {




    contact?:Contact[];
    categories?:Categorie[];
    IdCategorie!:number;
    
  
    constructor(private constr :ServiceService)
    {
      this.categories=this.constr.listeCategories();
      this.contact=this.constr.listecontacts();
    }


  
  
  
    
  
    deletecontact(p:Contact)
    {
      let conf = confirm("are you sure ?");
       if (conf)
         this.constr.deleteContact(p);
  
    }
    ngOnInit(): void {
  
      
    }

    onChange()
    {
      this.contact=this.constr.rechercherParCategorie(this.IdCategorie);
    }
      
  }


