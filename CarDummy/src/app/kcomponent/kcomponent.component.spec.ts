import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KcomponentComponent } from './kcomponent.component';

describe('KcomponentComponent', () => {
  let component: KcomponentComponent;
  let fixture: ComponentFixture<KcomponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KcomponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KcomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
