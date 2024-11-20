import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Contact } from '../model/contact.model';
import { Categorie } from '../model/categorie.model';
import { ServiceService } from '../services/service.service';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-update-contact',
  templateUrl: './update-contact.component.html',
})
export class UpdateContactComponent implements OnInit {
  curcontact: Contact = new Contact();
  categories!: Categorie[];
  updatedCatId!: number;


  myform : any;
  constructor(
    private route: ActivatedRoute,
    private rou: Router,
    private ser: ServiceService,
    private form :FormBuilder
  ) {


    this.myform=this.form.group(
      {

       name:['',[Validators.required,Validators.minLength(5)]],
       email:['',[Validators.required,Validators.minLength(5)]],
       date:['',[Validators.required]],
       type:['',[Validators.required]]

      }
     )
  }

  ngOnInit(): void {
    this.categories = this.ser.listeCategories();
    this.curcontact = this.ser.consultercontact(this.route.snapshot.params['id']);
    this.updatedCatId = this.curcontact.categorie.idCat;
  }

  updateContact() {



    this.curcontact.categorie = this.ser.consulterCategorie(this.updatedCatId);
    this.ser.updatecontact(this.curcontact);
    this.rou.navigate(['contact']);


  }
}
