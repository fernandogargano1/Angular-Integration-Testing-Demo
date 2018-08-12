/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable, Subject } from 'rxjs';

import { UserDetailsComponent } from './user-details.component';

class RouterStub {
    navigate(params) {
    }
}

class ActivatedRouteStub {
    // params: Observable<{ [key: string]: number }> = Observable.of({ id: 0});
    // or params: Observable<any> = Observable.of({ id: 0});
    // We don't need to assign it any value because we are going to spy on this 
    // service
    private subject =  new Subject();
    push(value) {
        this.subject.next(value);
    }
    // params: Observable<any> = Observable.empty();
    get params() {
         return this.subject.asObservable();
    }
}

// xdescribe('UserDetailsComponent', () => {
describe('UserDetailsComponent', () => {
  let component: UserDetailsComponent;
  let fixture: ComponentFixture<UserDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserDetailsComponent ],
      providers: [
         { provide: Router, useClass: RouterStub },
         { provide: ActivatedRoute, useClass: ActivatedRouteStub }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });           
   
  it('should redirect the user to the users page after saving', () => {        
        let router = TestBed.get(Router);
        let spy = spyOn(router, 'navigate');

        component.save(); 
        expect(spy).toHaveBeenCalledWith(['users']);
  });  

  it('should navigate the user to the not found page when an invalid user id is passed', () => {
        
        let router = TestBed.get(Router);
        let spy = spyOn(router, 'navigate');

        // We declare route of type ActivatedRouteStub to get intellisense since TestBed.get() returns 
        // and object of type any
        let route: ActivatedRouteStub = TestBed.get(ActivatedRoute);          
         
        route.push({ id: 0});
        expect(spy).toHaveBeenCalledWith(['not-found']);
  });
});
