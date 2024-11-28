import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Contact } from '../model/contact.model';
import { Categorie } from '../model/categorie.model';
import { ServiceService } from '../services/service.service';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-update-contact',
  templateUrl:'./update-contact.component.html',
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

        id:[''],
       name:['',[Validators.required,Validators.minLength(5)]],
       email:['',[Validators.required,Validators.minLength(5)]],
       date:['',[Validators.required]],
       type:['',[Validators.required]]

      }
     )
  }

  ngOnInit() {
    this.ser.listeCategories().subscribe(cats => {this.categories=cats._embedded.categories;
    console.log(cats);
    });
    this.ser.consultercontact(this.route.snapshot.params['id']).
    subscribe( prod =>{ this.curcontact = prod;
    this.updatedCatId =
    this.curcontact.categorie.idCat;
    } ) ;

    }


    updateContact() {
      this.curcontact.categorie = this.categories.
      find(cat => cat.idCat == this.updatedCatId)!;
     this.ser.updatecontact(this.curcontact).subscribe(prod => {
     this.rou.navigate(['contact']); }
     );

      }

}
