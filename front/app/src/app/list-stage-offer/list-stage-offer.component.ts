import { Component, Input, OnInit } from '@angular/core';

import { StageOfferService } from '../stage-offer.service';
import { stage_offer } from '../example';
import { Company } from '../classes/company';
import { StageOffer } from '../classes/stage_offer';

@Component({
  selector: 'app-list-stage-offer',
  templateUrl: './list-stage-offer.component.html',
  styleUrls: ['./list-stage-offer.component.css']
})
export class ListStageOfferComponent implements OnInit {

  @Input() company_search : Company | undefined;
  list_stage_offer: StageOffer[];


  constructor(
    private stage_offer_service: StageOfferService
  ) {
    
    this.list_stage_offer = stage_offer;
  }
  search_stage_offer(event: KeyboardEvent){
    let value = (event.target as HTMLInputElement).value
    console.log("search :"+ value);
    let result = this.stage_offer_service.search_stage_offers(value);
    console.log(result);
    this.list_stage_offer = result;
  }

  ngOnInit(): void {
    
    console.log(this.company_search);
    if(this.company_search){
      this.list_stage_offer = this.stage_offer_service.search_stage_offers_by_company(this.company_search);
    }
  }

}
