import { Company } from "./company";

export class Intervenant{
    readonly id:number;
    name: string;
    family_name: string;
    address: string;
    email: string;
    poste: string;
    company: Company;

    constructor(id:number, name:string, family_name:string, year:number, address:string, email:string, poste:string, company: Company){
        this.id= id;
        this.name = name;
        this.family_name = family_name;
        this.address = address;
        this.email = email;
        this.poste = poste;
        this.company = company;
    }
}