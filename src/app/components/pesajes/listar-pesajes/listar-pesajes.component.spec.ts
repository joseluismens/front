import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarPesajesComponent } from './listar-pesajes.component';

describe('ListarPesajesComponent', () => {
  let component: ListarPesajesComponent;
  let fixture: ComponentFixture<ListarPesajesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListarPesajesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarPesajesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
