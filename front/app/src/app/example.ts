import {Company} from './classes/company';
import { Document } from './classes/documents';
import { Eleve } from './classes/eleve';
import {StageOffer} from './classes/stage_offer';
import { TypeStage } from './classes/type_stage';

const text = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
export const company_list = [
    new Company(1,"EDF","Premier vendeur d'electricité","rue des bois jolie"),
    new Company(2,"Dassault","Vendeur d'armement francais","bordeaux Nouvelle aquitaine"),
    new Company(3,"Airbus","Constructeur d'avion"," 33185 Le Haillan"),
]
export const type_stages= [
    new TypeStage(1, "Ouvrier"),
    new TypeStage(2, "Executant"),
    new TypeStage(3, "Rémunéré"),
    new TypeStage(4, "Stage fin d'année"),
]
export const documents = [
    new Document({id:1,filename:"021278_edf.pdf",name:"presentation.pdf"}),
    new Document({id:1,filename:"021278_edf.pdf",name:"presentation.pdf"})
]
export const stage_offer = [
    new StageOffer(
        1, 'Stage Ouvrier', text, 'ouvrier', '10 rue de la villette', 'juin', '2 mois', company_list[0], [type_stages[0], type_stages[2]], documents),
    new StageOffer(
        2, 'Maintenance', text, 'technicien', '10 rue de la villette', 'juin', '2 mois', company_list[0], type_stages, documents),
    new StageOffer(
        3, 'Conception Turbine R&D', text, 'ingénieur R&D', 'Paris', 'juin', '2 mois', company_list[2], [type_stages[3]], documents)
]

export const utilisateur = new Eleve(1, 'Samuel', 'Theron', 2, '19 ...', 'test@gmail.com')