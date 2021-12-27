import {Company} from './classes/company';
import { Document } from './classes/documents';
import { Eleve } from './classes/eleve';
import {StageOffer} from './classes/stage_offer';
import { TypeStage } from './classes/type_stage';

const text = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
export const company_list = [
    new Company({id:1,name:"EDF",description:"Premier vendeur d'electricité",address:"rue des bois jolie"}),
    new Company({id:2,name:"Dassault",description:"Vendeur d'armement francais",address:"bordeaux Nouvelle aquitaine}"}),
    new Company({id:3,name:"Airbus",description:"Constructeur d'avion",address:" 33185 Le Haillan"}),
]
export const type_stages= [
    new TypeStage({id:1, name:"Ouvrier"}),
    new TypeStage({id:2, name:"Executant"}),
    new TypeStage({id:3, name:"Rémunéré"}),
    new TypeStage({id:4, name:"Stage fin d'année"}),
]
export const documents = [
    new Document({id:1,filename:"021278_edf.pdf",name:"presentation.pdf"}),
    new Document({id:2,filename:"021275458_edf.pdf",name:"test.pdf"})
]
export const stage_offer = [
    new StageOffer(
        {id:1, titre:'Stage Ouvrier', description: text, poste:'ouvrier', lieu:'10 rue de la villette', date: 'juin', duration: '2 mois', company: company_list[0], type_stages: [type_stages[0], type_stages[2]], pj_offer_stages: documents}),
    new StageOffer(
        {id:2, titre:'Maintenance', description: text, poste:'technicien', lieu:'10 rue de la villette', date: 'juin', duration: '2 mois', company: company_list[0], type_stages: type_stages, pj_offer_stages: documents}),
    new StageOffer(
        {id:3, titre:'Conception Turbine R&D', description: text, poste:'ingénieur R&D', lieu:'Paris', date: 'juin', duration: '2 mois', company: company_list[2], type_stages: [type_stages[3]], pj_offer_stages: documents})
]

export const utilisateur = new Eleve({id:1, name:'Samuel', family_name: 'Theron', year: 2, address: '19 ...', email:'test@gmail.com'})