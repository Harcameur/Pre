import { Cv } from "./cv";

export class Eleve{
    readonly id:number;
    name: string;
    family_name: string;
    year: number;
    address: string;
    email: string;
    cv : Cv | null;

    constructor(id:number, name:string, family_name:string, year:number, address:string, email:string, cv:Cv | null = null){
        this.id= id;
        this.name = name;
        this.family_name = family_name;
        this.year = year;
        this.address = address;
        this.email = email;
        this.cv = cv;
    }
}