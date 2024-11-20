import { Component, OnInit } from '@angular/core';
import { Contact } from '../model/contact.model';
import { Router } from '@angular/router';
import { Categorie } from '../model/categorie.model';
import { ServiceService } from '../services/service.service';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styleUrls: ['./add-contact.component.css'],
})
export class AddContactComponent implements OnInit {
  categories!: Categorie[];
  newIdCat!: number;
  newcontact: Contact = new Contact();

  myform:any;


  constructor(private addon: ServiceService, private rou: Router,private form :FormBuilder) {


    this.myform=this.form.group(
     {
      id:['',[Validators.required]],
      name:['',[Validators.required,Validators.minLength(5)]],
      email:['',[Validators.required,Validators.minLength(5)]],
      date:['',[Validators.required]],
      type:['',[Validators.required]]

     }
    )

  }

  ngOnInit() {
    this.categories = this.addon.listeCategories();
  }

  addContact() {



    this.newcontact.categorie = this.addon.consulterCategorie(this.newIdCat);
    this.addon.addcontact(this.newcontact);
    this.rou.navigate(['contact']);
  }
}
