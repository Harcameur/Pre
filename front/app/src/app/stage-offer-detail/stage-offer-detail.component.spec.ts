import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StageOfferDetailComponent } from './stage-offer-detail.component';

describe('StageOfferDetailComponent', () => {
  let component: StageOfferDetailComponent;
  let fixture: ComponentFixture<StageOfferDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StageOfferDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StageOfferDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
