import { Component } from '@angular/core';
import { Contact } from '../model/contact.model';
import { ServiceService } from '../services/service.service';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {


  contact?:Contact[];
  

  constructor(private constr :ServiceService)
  {
    
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
    
}
