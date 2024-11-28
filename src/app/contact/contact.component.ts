import { Component } from "@angular/core";
import { Contact } from "../model/contact.model";
import { ServiceService } from "../services/service.service";
import { AuthService } from "../services/auth.service";

@Component({
  selector: "app-contact",
  templateUrl: "./contact.component.html",
  styleUrl: "./contact.component.css",
})
export class ContactComponent {
  contact?: Contact[];

  constructor(private constr: ServiceService, public authService: AuthService) {
   
  }

  deletecontact(p: Contact) {
    let conf = confirm("Etes-vous sûr ?");
    if (conf)
    this.constr.deleteContact(p.id).subscribe(() => {
    console.log("produit supprimé");
    this.chargerContact();
    });
  }

  ngOnInit(): void {
    this.chargerContact();
    }



    chargerContact(){
    this.constr.listeContact().subscribe(prods => {
    console.log(prods);
    this.contact = prods;
    });



  }
}
