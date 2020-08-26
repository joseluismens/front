import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateSiloComponent } from './create-silo.component';

describe('CreateSiloComponent', () => {
  let component: CreateSiloComponent;
  let fixture: ComponentFixture<CreateSiloComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateSiloComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateSiloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
