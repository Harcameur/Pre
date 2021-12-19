import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StageOffer } from '../classes/stage_offer';
import { stage_offer } from '../example';

@Component({
  selector: 'app-stage-offer-detail',
  templateUrl: './stage-offer-detail.component.html',
  styleUrls: ['./stage-offer-detail.component.css']
})
export class StageOfferDetailComponent implements OnInit {

  stage_offer : StageOffer | undefined;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    // First get the product id from the current route.
    const routeParams = this.route.snapshot.paramMap;
    const productIdFromRoute = Number(routeParams.get('stage_offerID'));
  
    // Find the product that correspond with the id provided in route.
    this.stage_offer = stage_offer.find(stage_offer => stage_offer.id === productIdFromRoute);
  }

}
