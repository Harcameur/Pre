import {Company} from './classes/company';
import {StageOffer} from './classes/stage_offer';

export const company_list = [
    new Company(1,"EDF","Premier vendeur d'electricité","rue des bois jolie"),
    new Company(2,"Dassault","Vendeur d'armement francais","bordeaux Nouvelle aquitaine"),
    new Company(3,"Airbus","Constructeur d'avion"," 33185 Le Haillan")
]

export const stage_offer = [
    new StageOffer(1, 'Stage Ouvrier', 'stage executant', 'ouvrier', '10 rue de la villette', 'juin', '2 mois', company_list[0]),
    new StageOffer(2, 'Maintenance', 'stage superviseur', 'technicien', '10 rue de la villette', 'juin', '2 mois', company_list[0])
]