import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutCarComponent } from './ajout-car.component';

describe('AjoutCarComponent', () => {
  let component: AjoutCarComponent;
  let fixture: ComponentFixture<AjoutCarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AjoutCarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AjoutCarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
