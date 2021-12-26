import { Company, ICompany } from "./company";
import { Document, IDocument } from "./documents";
import { TypeStage, ITypeStage } from "./type_stage";

export interface IStageOffer{
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
}

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

    constructor(data: IStageOffer){
        this.id = data.id;
        this.titre = data.titre;
        this.description = data.description;
        this.poste = data.poste;
        this.lieu = data.lieu;
        this.date = data.date;
        this.duration = data.duration;
        this.company = this.test_company(data.company);
        this.type_stages = this.test_type_stage(data.type_stages);
        this.pj_offer_stages = this.test_pj_offer_stage(data.pj_offer_stages);
    }

    test_company(obj: Company | ICompany): Company{
        if (obj instanceof Company){
            return obj;
        }else{
            return new Company(obj);
        }
    }

    test_pj_offer_stage(obj: Array<Document> | Array<IDocument>): Array<Document>{
        let retour:Array<Document> = [];
        obj.forEach(element => function(){
            if(element instanceof Document){
                retour.push(element)
            }else{
                retour.push(new Document(element))
            }
        })
        return retour;
    }

    test_type_stage(obj: Array<TypeStage> | Array<ITypeStage>): Array<TypeStage>{
        let retour:Array<TypeStage> = [];
        obj.forEach(element => function(){
            if(element instanceof TypeStage){
                retour.push(element)
            }else{
                retour.push(new TypeStage(element))
            }
        })
        return retour;
    }
}