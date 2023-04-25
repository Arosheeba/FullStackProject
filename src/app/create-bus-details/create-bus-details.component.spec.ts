import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateBusDetailsComponent } from './create-bus-details.component';

describe('CreateBusDetailsComponent', () => {
  let component: CreateBusDetailsComponent;
  let fixture: ComponentFixture<CreateBusDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateBusDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateBusDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
