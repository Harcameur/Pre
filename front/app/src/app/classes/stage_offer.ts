import { Company } from "./company";

export class StageOffer{
    readonly id: number;
    titre: string;
    description: string;
    poste: string;
    lieu: string;
    date: string;
    duration: string;
    company: Company;

    constructor(id:number, titre:string, description:string, poste:string, lieu:string, date:string, duration:string, company: Company){
        this.id = id;
        this.titre = titre;
        this.description = description;
        this.poste = poste;
        this.lieu = lieu;
        this.date = date;
        this.duration = duration;
        this.company = company;
    }
}