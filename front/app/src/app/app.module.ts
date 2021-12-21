import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CompanyComponent } from './company/company.component';
import { ListStageOfferComponent } from './list-stage-offer/list-stage-offer.component';
import { StageOfferDetailComponent } from './stage-offer-detail/stage-offer-detail.component';
import { HomeComponent } from './home/home.component';
import { FileDownloadComponent } from './file-download/file-download.component';
import { HeaderBarComponent } from './header-bar/header-bar.component';
import { AuthComponent } from './auth/auth.component';

@NgModule({
  declarations: [
    AppComponent,
    CompanyComponent,
    ListStageOfferComponent,
    StageOfferDetailComponent,
    HomeComponent,
    FileDownloadComponent,
    HeaderBarComponent,
    AuthComponent
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
