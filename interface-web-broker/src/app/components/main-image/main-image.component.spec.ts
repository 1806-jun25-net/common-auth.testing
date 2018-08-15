import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainImageComponent } from './main-image.component';
import { MatCardModule, MatGridListModule } from '@angular/material';

describe('MainImageComponent', () => {
  let component: MainImageComponent;
  let fixture: ComponentFixture<MainImageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainImageComponent ],
      imports: [MatCardModule, MatGridListModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have correct img src', async(() => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('img').src).toContain('/assets/img/housing.jpg');
  }));
});
