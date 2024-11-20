import { Component, OnInit } from '@angular/core';
import { Categorie } from '../model/categorie.model';
import { ServiceService } from '../services/service.service';

@Component({
  selector: 'app-liste-categories',
  templateUrl: './liste-categories.component.html',
  styleUrls: ['./liste-categories.component.css']
})
export class ListeCategoriesComponent implements OnInit {
  categories!: Categorie[];
  updatedCat: Categorie = { idCat: 0, nomCat: '' };
  ajout:boolean=true;

  constructor(private service: ServiceService) {}

  chargerCategories() {
    this.categories = this.service.listeCategories();
  }

  categorieUpdated(cat: Categorie) {
    console.log(cat);
    this.service.ajouterCategorie(cat).subscribe(() => this.chargerCategories());
  }


  setUpdatedCat(cat: Categorie) {
    this.updatedCat = cat;
    this.ajout=false;
  }

  ngOnInit(): void {
    this.chargerCategories();
  }
}



