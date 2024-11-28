import { Categorie } from "./categorie.model";

export class Contact {

    id! : number;
    nom! : string;
    email! : string;
     date! : Date ;
     categorie! : Categorie;

     enabled?: boolean;
    }
