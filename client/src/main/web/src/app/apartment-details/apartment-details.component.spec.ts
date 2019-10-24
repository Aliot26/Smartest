import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {ApartmentDetailsComponent} from './apartment-details.component';
import {HttpClientModule} from "@angular/common/http";
import {FormsModule} from "@angular/forms";
import {RouterModule} from "@angular/router";

describe('ApartmentDetailsComponent', () => {
  let component: ApartmentDetailsComponent;
  let fixture: ComponentFixture<ApartmentDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ApartmentDetailsComponent],
      imports: [
        FormsModule,
        HttpClientModule,
        RouterModule.forRoot([])
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApartmentDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
