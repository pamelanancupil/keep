import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FunctioningComponent } from './functioning.component';

describe('FunctioningComponent', () => {
  let component: FunctioningComponent;
  let fixture: ComponentFixture<FunctioningComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FunctioningComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FunctioningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
