import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularHelpComponent } from './angular-help.component';

describe('AngularHelpComponent', () => {
  let component: AngularHelpComponent;
  let fixture: ComponentFixture<AngularHelpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AngularHelpComponent ]
    })
      .compileComponents();

    fixture = TestBed.createComponent(AngularHelpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AngularHelpComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should have as title \'my-app\'', () => {
    const fixture = TestBed.createComponent(AngularHelpComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('my-app');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AngularHelpComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.content span')?.textContent).toContain('my-app app is running!');
  });
});
