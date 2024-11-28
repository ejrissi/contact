import { Injectable } from '@angular/core';
import { Contact } from '../model/contact.model';
import { Categorie } from '../model/categorie.model';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { apiURL } from '../config';
import { CategorieWrapper } from '../model/categorieWrapped.model';



const httpOptions = {

  headers: new HttpHeaders( {'Content-Type': 'application/json'} )
  };


@Injectable({
  providedIn: 'root',
})
export class ServiceService {



  apiCat: string = 'http://localhost:8081/contacts/cat';



  contact!: Contact[];
  Contact?: Contact[];
  contactRecherche: Contact[] = [];



  contacts!: Contact;
  categorie: Categorie = new Categorie();
  listee: any;

  constructor(private http : HttpClient) {

    this.listeContact().subscribe(prods => {
      console.log(prods);
      this.contact = prods;
      });
  }

  listeContact():Observable<Contact[]>{
    return this.http.get<Contact[]>(apiURL);

    }


    addContact( prod: Contact):Observable<Contact>{
            return this.http.post<Contact>(apiURL, prod, httpOptions);
      }

    deleteContact(id : number) {
      
        const url = `${apiURL}/${id}`;
        return this.http.delete(url, httpOptions);

      }



   consultercontact (id: number): Observable<Contact> {
    const url = `${apiURL}/${id}`;
    return this.http.get<Contact>(url);
    }

    updatecontact(prod :Contact) : Observable<Contact>
    {
    return this.http.put<Contact>(apiURL, prod, httpOptions);
    }




  tricontact() {
    this.contact = this.contact.sort((n1, n2) => {
      if (n1.id! > n2.id!) {
        return 1;
      }
      if (n1.id! < n2.id!) {
        return -1;
      }
      return 0;
    });
  }

  listeCategories():Observable<CategorieWrapper>{
    return this.http.get<CategorieWrapper>(this.apiCat);
    }




  // consulterCategorie(id: number): Categorie {
  //   this.categorie = this.categories.find(cat => cat.idCat == id) || new Categorie();
  //   return this.categorie;
  // }

  // rechercherParCategorie(idCat: number): Contact[] {
  //   this.contactRecherche = [];
  //   this.contact.forEach((cur) => {
  //     if (Number(idCat) === Number(cur.categorie.idCat)) {
  //       this.contactRecherche.push(cur);
  //     }
  //   });
  //   return this.contactRecherche;
  // }

  rechercherParNom(name: string): Contact[] {
    if (!name) {
      return   this.contact;
    }


    this.contactRecherche = this.contact.filter(contact =>
      contact.nom && contact.nom.toLowerCase().includes(name.toLowerCase())
    );
    return this.contactRecherche;
  }


  // ajouterCategorie(cat: Categorie){
  //   this.categories.push(cat);
  //   return of(cat);

  // }




}
