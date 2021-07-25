import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OwnDirectiveComponent } from './own-directive.component';

describe('OwnDirectiveComponent', () => {
  let component: OwnDirectiveComponent;
  let fixture: ComponentFixture<OwnDirectiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OwnDirectiveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OwnDirectiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
