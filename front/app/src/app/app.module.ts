import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CompanyComponent } from './company/company.component';
import { ListStageOfferComponent } from './list-stage-offer/list-stage-offer.component';
import { StageOfferDetailComponent } from './stage-offer-detail/stage-offer-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    CompanyComponent,
    ListStageOfferComponent,
    StageOfferDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot([
      { path: '', component: ListStageOfferComponent },
      { path: 'stage_offer/:stage_offerID', component: StageOfferDetailComponent },
      { path: 'company/:companyID', component: CompanyComponent },
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
