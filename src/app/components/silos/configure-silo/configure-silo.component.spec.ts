import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfigureSiloComponent } from './configure-silo.component';

describe('ConfigureSiloComponent', () => {
  let component: ConfigureSiloComponent;
  let fixture: ComponentFixture<ConfigureSiloComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfigureSiloComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfigureSiloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
