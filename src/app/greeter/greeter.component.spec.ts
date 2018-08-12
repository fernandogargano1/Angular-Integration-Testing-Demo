import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GreeterComponent } from './greeter.component';

describe('GreeterComponent', () => {
  let component: GreeterComponent;
  let fixture: ComponentFixture<GreeterComponent>;

  /* 
  * But we have 2 beforeEach blocks. In the first one we config our testing module 
  * and in the second block we create the component. The reason for this is because
  * the component's template is in a different file and we need to instruct Angular 
  * to compile that template as well as the stylesheet with the component's implementation.
  * with .compileComponent() method we are telling Angular to compile all the components 
  * that we have declared here along with their templates and stylesheets.
  *
  * Because this files are external Angular needs to access the filesystem as part of 
  * the compilation and accessing the file system is a little bit slow. That's why 
  * compileComponents() method does it asynchronously and for this same reason we 
  * can see we have a call to the async() function here. So this async() function is 
  * one of the utility functions defined in Angular. The async() function runs the 
  * in an asynchronous zone, and then it will return a standard function that we can pass
  * to the beforeEach. The first beforeEach has to run asynchronously because of the 
  * .compileComponents() method. But once the components are compiled along with their 
  * template and stylesheets. Then before the second beforeEach() is called and at point 
  * we can create an instance of this component. 
  *
  * However in the last lecture we did not have a called to the.compileComponents method().
  * Why? Because when we use Webpack, it automatically inline the component's atemplate and 
  * the stylesheet in a JavaScript bundle. So the component's implemenations as well as its 
  * template and stylesheet are all in the same file, the same JavaScript file and this 
  * means that when using Webpack which is the standard builder when using Angular CLI 
  * we don't really need to call this .compileComponents() method. This is really unnecessary 
  * and as you can see is adding an extra complexity to our test set up. It has 2 beforeEach()
  * blocks and of them is asynchronous. 
  */

  beforeEach(async(() => {
    // You can take this code here and move it into the second beforeEach() and then 
    // get rid of this first beforeEach() block.
    TestBed.configureTestingModule({
      declarations: [ GreeterComponent ]
    })
    // You can simply delete this line. It is not needed when using Webpack as a builder.
    .compileComponents();
  }));

  beforeEach(() => {
    /*
       You can paste in the code from the first beforeEach() block right here
       So this is very similar to what we have in the last lecture. But you 
       don't need to do this change each time you generate a component with Angular CLI. 
       You can keep the default generator spec file. It's your personal choice
    */ 
    fixture = TestBed.createComponent(GreeterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
