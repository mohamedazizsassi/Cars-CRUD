import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionCarComponent } from './gestion-car.component';



describe('GestionCarComponent', () => {
  let component: GestionCarComponent;
  let fixture: ComponentFixture<GestionCarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GestionCarComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(GestionCarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
