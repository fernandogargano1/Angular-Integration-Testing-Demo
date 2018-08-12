/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HighlightDirective } from './highlight.directive';
import { By } from '@angular/platform-browser';
import { Component } from '@angular/core'; 

@Component({
  template: `
    <p highlight="cyan">First</p>
    <p highlight>Second</p>
  `
})
class DirectiveHostComponent { 
}

describe('HighlightDirective', () => {
  let fixture: ComponentFixture<DirectiveHostComponent>;
  
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DirectiveHostComponent, HighlightDirective ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DirectiveHostComponent);
    fixture.detectChanges(); 
  });

  it('should highlight the first element with cyan', () => {
    /* 
      So we are gonna get a reference to this element from 
      an array of paragraph.
     */
    let de = fixture.debugElement.queryAll(By.css('p'))[0];
    expect(de.nativeElement.style.backgroundColor).toBe('cyan');
  });

  it('should highlight the first element with the default color', () => {
    /* 
      So we are gonna get a reference to this element from 
      an array of paragraph. In order that the test doesn't 
      break if we in the future change default color we 
      get a reference to the directive (as we did we services
      using the injector) and change our assertion from
      yellow to directive dot default color. This way our 
      test is more general.
     */
    let de = fixture.debugElement.queryAll(By.css('p'))[1];
    let directive = de.injector.get(HighlightDirective);

    // expect(de.nativeElement.style.backgroundColor).toBe('yellow');
    expect(de.nativeElement.style.backgroundColor).toBe(directive.defaultColor);
  });

});
