import { categorie } from "../../categories";
import { Etats } from "./etats";
import { User } from "./UserProfile";

export interface Demande {
    id:number;
    proprietaire: User;
    category: categorie;
    status: Etats;
    titre:string;
    description:string;
    localisation:string;
    images:string[];
    disponible:string;
}