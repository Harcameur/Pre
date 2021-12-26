import { Company, ICompany } from "./company";
import { Cv } from "./cv";

export interface IIntervenant{
    readonly id:number;
    name: string;
    family_name: string;
    address: string;
    email: string;
    poste: string;
    company: ICompany | Company;
}

export class Intervenant{
    readonly id:number;
    name: string;
    family_name: string;
    address: string;
    email: string;
    poste: string;
    company: Company;

    constructor(data: IIntervenant){
        this.id= data.id;
        this.name = data.name;
        this.family_name = data.family_name;
        this.address = data.address;
        this.email = data.email;
        this.poste = data.poste;

        this.company = this.test_company(data.company);
    }

    test_company(obj: Company | ICompany): Company{
        if (obj instanceof Company){
            return obj;
        }else{
            return new Company(obj);
        }
    } 
}