import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterComponent } from './footer.component';
import { MatGridListModule } from '@angular/material';

describe('FooterComponent', () => {
  let component: FooterComponent;
  let fixture: ComponentFixture<FooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FooterComponent ],
      imports: [ MatGridListModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
   });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have correct Revature link', async(() => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('a').href).toContain('http://revature.com');
  }));
  it('should have correct date', async(() => {
    const compiled = fixture.debugElement.componentInstance;
    const actual = Date.now();
    expect(compiled.today).toBeCloseTo(actual, -2);
  }));
});
