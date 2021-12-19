import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListStageOfferComponent } from './list-stage-offer.component';

describe('ListStageOfferComponent', () => {
  let component: ListStageOfferComponent;
  let fixture: ComponentFixture<ListStageOfferComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListStageOfferComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListStageOfferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
