import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListSilosComponent } from './list-silos.component';

describe('ListSilosComponent', () => {
  let component: ListSilosComponent;
  let fixture: ComponentFixture<ListSilosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListSilosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListSilosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
