// import { NavComponent } from './nav/nav.component';
import { RouterTestingModule } from '@angular/router/testing';
/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { By } from '@angular/platform-browser';
import { DebugElement, NO_ERRORS_SCHEMA } from '@angular/core';


import { AppComponent } from './app.component';
import { RouterOutlet, RouterLinkWithHref } from '@angular/router';


describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ 
        AppComponent, 
        // NavComponent        
      ],
      schemas: [ NO_ERRORS_SCHEMA ],
      imports: [ RouterTestingModule.withRoutes([]) ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges(); 
  });

  it('should have a router outlet', () => {    
      let de = fixture.debugElement.query(By.directive(RouterOutlet));

      expect(de).not.toBe(null);
  });

  // Now the second test
  // it('should have a link to todos page', () => {    

  //     let debugElements = fixture.debugElement.queryAll(By.directive(RouterLinkWithHref));
     
  //     let index = debugElements.findIndex(de => de.properties['href'] === '/todos')

  //     expect(index).toBeGreaterThan(-1);
  // });
});
