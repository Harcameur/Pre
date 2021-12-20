import { Company } from "./company";
import { Document } from "./documents";
import { TypeStage } from "./type_stage";


export class StageOffer{
    readonly id: number;
    titre: string;
    description: string;
    poste: string;
    type_stages: Array<TypeStage>;
    pj_offer_stages: Array<Document>;
    lieu: string;
    date: string;
    duration: string;
    company: Company;

    constructor(
            id:number,
            titre:string,
            description:string,
            poste:string,
            lieu:string,
            date:string,
            duration:string,
            company: Company,
            type_stages: Array<TypeStage>,
            pj_offer_stages: Array<Document>
        ){
        this.id = id;
        this.titre = titre;
        this.description = description;
        this.poste = poste;
        this.lieu = lieu;
        this.date = date;
        this.duration = duration;
        this.company = company;
        this.type_stages = type_stages;
        this.pj_offer_stages = pj_offer_stages;
    }
}