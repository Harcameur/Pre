import { Component, OnInit } from '@angular/core';

import { stage_offer } from '../example';

@Component({
  selector: 'app-list-stage-offer',
  templateUrl: './list-stage-offer.component.html',
  styleUrls: ['./list-stage-offer.component.css']
})
export class ListStageOfferComponent implements OnInit {

  list_stage_offer = stage_offer;

  ngOnInit(): void {
  }

}
