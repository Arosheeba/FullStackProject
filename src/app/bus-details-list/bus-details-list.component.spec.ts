import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BusDetailsListComponent } from './bus-details-list.component';

describe('BusDetailsListComponent', () => {
  let component: BusDetailsListComponent;
  let fixture: ComponentFixture<BusDetailsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BusDetailsListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BusDetailsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
