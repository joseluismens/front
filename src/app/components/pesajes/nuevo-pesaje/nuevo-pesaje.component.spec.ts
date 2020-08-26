import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NuevoPesajeComponent } from './nuevo-pesaje.component';

describe('NuevoPesajeComponent', () => {
  let component: NuevoPesajeComponent;
  let fixture: ComponentFixture<NuevoPesajeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NuevoPesajeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NuevoPesajeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
