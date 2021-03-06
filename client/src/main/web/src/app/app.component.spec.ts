import {async, TestBed} from '@angular/core/testing';
import {AppComponent} from './app.component';
import {RouterTestingModule} from "@angular/router/testing";
import {BrowserDynamicTestingModule} from "@angular/platform-browser-dynamic/testing";
import {AfterContentInit, Component, CUSTOM_ELEMENTS_SCHEMA, TemplateRef, ViewChild} from "@angular/core";
import {NavbarComponent} from "./navbar/navbar.component";
import {FooterComponent} from "./footer/footer.component";
import {LoginComponent} from "./login/login.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {UserComponent} from "./user/user.component";
import {UserDetailsComponent} from "./user-details/user-details.component";
import {HttpClientModule} from "@angular/common/http";
import {LocalForecastComponent} from "./local-forecast/local-forecast.component";



describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AppComponent,
        NavbarComponent,
        FooterComponent,
        LoginComponent,
        UserComponent,
        UserDetailsComponent,
        LocalForecastComponent],
      imports: [RouterTestingModule,
        BrowserDynamicTestingModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule
      ],
      // schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'SmartestApp'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('SmartestApp');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('.content span').textContent).toContain('smartest-app app is running!');
  });
});
