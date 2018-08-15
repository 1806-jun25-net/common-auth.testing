import { MatCardModule, MatGridListModule } from '@angular/material';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarComponent } from './navbar.component';

describe('NavbarComponent', () => {
  let component: NavbarComponent;
  let fixture: ComponentFixture<NavbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [NavbarComponent],
      imports: [
        MatCardModule,
        MatGridListModule
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have Login button', () => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('button').textContent).toEqual('Login');
  });

  it('should have link to home', () => {
    const compiled = fixture.nativeElement;
    const select = compiled.querySelector('a[routerLink=""]');
    expect(select).toBeTruthy();
    expect(select.textContent).toBe('Home');
  });

  it('should have link to selection', () => {
    const compiled = fixture.nativeElement;
    const select = compiled.querySelector('a[routerLink="selection"]');
    expect(select).toBeTruthy();
    expect(select.textContent).toBe('Selection');
  });

  it('should have link to forecasting', () => {
    const compiled = fixture.nativeElement;
    const select = compiled.querySelector('a[routerLink="forecast"]');
    expect(select).toBeTruthy();
    expect(select.textContent).toBe('Forecast');
  });
});
