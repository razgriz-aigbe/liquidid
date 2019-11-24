import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExistingKeyComponent } from './existing-key.component';

describe('ExistingKeyComponent', () => {
  let component: ExistingKeyComponent;
  let fixture: ComponentFixture<ExistingKeyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExistingKeyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExistingKeyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
