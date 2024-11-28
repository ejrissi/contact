import { Component, OnInit } from '@angular/core';
import { Contact } from '../model/contact.model';
import { ServiceService } from '../services/service.service';

@Component({
  selector: 'app-recherche-par-nom',
  templateUrl:'./recherche-par-nom.component.html',
  styles: []
})
export class RechercheParNomComponent implements OnInit {
  contact!: Contact[];
  searchName: string = '';

  constructor(private constr: ServiceService) {
    this.constr.listeContact().subscribe(prods => {
      console.log(prods);
      this.contact = prods;
      });
  }

  ngOnInit(): void {}

  onSearch() {

    this.contact = this.constr.rechercherParNom(this.searchName);
    console.log("Filtered Contacts: ", this.contact);
  }

  deleteContact(p: Contact) {
    let conf = confirm("Etes-vous sûr ?");
    if (conf)
    this.constr.deleteContact(p.id).subscribe(() => {
    console.log("produit supprimé");
    this.chargerContact();
    });
  }

  chargerContact(){
    this.constr.listeContact().subscribe(prods => {
    console.log(prods);
    this.contact = prods;
    });



  }

}
