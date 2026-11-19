import { User } from "./UserProfile";

export interface Reparateur extends User {
    description:string;
    categorie:string;
    zone: string;
    disponibilites:string;
    nbReparationTermine:number;
}