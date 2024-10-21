import { Injectable } from '@angular/core';
import { Contact } from '../model/contact.model';
import { Categorie } from '../model/categorie.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ServiceService {






 
  static listcontacts(): Contact[] {
    throw new Error('Method not implemented.');
  }
  contact: Contact[];

  categories : Categorie[];

  constructor() {
    

    this.categories = [ {idCat : 1, nomCat : "friend"},
      {idCat : 2, nomCat : "close friend"},
      {idCat : 3, nomCat : "family"}];


    this.contact =[
      { id:1, name: 'a', email: '@gmail', date: new Date('01/14/2024'), categorie : {idCat: 1, nomCat : "close friend"} },
      { id: 1, name: 'b', email: '@gmail', date: new Date('01/14/2024') , categorie : {idCat: 2, nomCat : " friend"} },
      { id: 1, name: 'c', email: '@gmail', date: new Date('01/14/2024'), categorie : {idCat: 3, nomCat : "close friend"} },
    ];
  }



  listecontacts(): Contact[] {
    return this.contact;
  }
  addcontact(prod: Contact) {
    this.contact.push(prod);
  }


  deleteContact( prod: Contact){

    const index = this.contact.indexOf(prod, 0);
    if (index > -1) {
    this.contact.splice(index, 1);
    }
   
    }
    
    contacts! : Contact;
consultercontact(id:number): Contact{
this.contacts = this.contact.find(p => p.id == id)!;
return this.contacts;
}





updatecontact(p:Contact)
{

this.deleteContact(p);
this.addcontact(p);
this.tricontact();
}


tricontact(){
  this.contact = this.contact.sort((n1,n2) => {
  if (n1.id! > n2.id!) {
  return 1;
  }
  if (n1.id! < n2.id!) {
  return -1;
  }
  return 0;
  });
  }

  



  listeCategories():Categorie[] {
    return this.categories;
    }
    consulterCategorie(id:number): Categorie{
    return this.categories.find(cat => cat.idCat == id)!;
    }

  

}

