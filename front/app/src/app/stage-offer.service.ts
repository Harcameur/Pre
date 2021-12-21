import { Injectable } from '@angular/core';
import { Company } from './classes/company';
import { StageOffer } from './classes/stage_offer';
import { stage_offer } from './example';

@Injectable({
  providedIn: 'root'
})
export class StageOfferService {
  stage_offers : StageOffer[] = [];


  get_stage_offers(){
    /* getting all stage from serveur */
    this.stage_offers = stage_offer;
  }

  search_stage_offers(keyword: string){
    //let result_company = filtreOfferByCompany(stage_offer, keyword);
    let result_title = filtreOfferByTitle(stage_offer, keyword);
    return result_title
  }
  search_stage_offers_by_company(company: Company){
    //let result_company = filtreOfferByCompany(stage_offer, keyword);
    
    let result = filtreOfferByCompany(stage_offer, company);
    return result
  }
}
export const filtreOfferByTitle = (arr:Array<StageOffer>, requete:string) => {
  return arr.filter(el =>  el.titre.toLowerCase().indexOf(requete.toLowerCase()) !== -1);
}
export const filtreOfferByCompany = (arr:Array<StageOffer>, requete:Company) => {
  return arr.filter(el =>  el.company === requete);
}
/*
export const filtreOfferByTag = (arr:Array<StageOffer>, requete:string) => {
  let result: = [];
  result.concat(arr_tag.filter(el => el.tag.toLowerCase().indexOf(requete.toLowerCase()) !== -1));
}*/

export const pertinenceArray= (arr1: StageOffer[], arr2: StageOffer[]) => {
  let filteredArray = arr1.filter(value => arr2.includes(value));
  console.log(filteredArray)
  filteredArray.concat(arr1.filter(value => !arr2.includes(value)));
  return filteredArray
}