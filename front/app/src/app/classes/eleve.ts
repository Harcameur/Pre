import { Cv, ICv } from "./cv";

export interface IEleve{
    id:number;
    name: string;
    family_name: string;
    year: number;
    address: string;
    email: string;
    cv ?: Cv | ICv;
}

export class Eleve{
    readonly id:number;
    name: string;
    family_name: string;
    year: number;
    address: string;
    email: string;
    cv ?: Cv | ICv;

    constructor(data: IEleve){
        this.id= data.id;
        this.name = data.name;
        this.family_name = data.family_name;
        this.year = data.year;
        this.address = data.address;
        this.email = data.email;
        if(data.cv instanceof Cv){
            this.cv = data.cv;
        }else if(data.cv != undefined){
            this.cv = new Cv(data.cv);
        }
    }
}