import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeshabilitarPesajeComponent } from './deshabilitar-pesaje.component';

describe('DeshabilitarPesajeComponent', () => {
  let component: DeshabilitarPesajeComponent;
  let fixture: ComponentFixture<DeshabilitarPesajeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeshabilitarPesajeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeshabilitarPesajeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
