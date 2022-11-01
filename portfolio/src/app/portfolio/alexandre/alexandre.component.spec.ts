import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlexandreComponent } from './alexandre.component';

describe('AlexandreComponent', () => {
  let component: AlexandreComponent;
  let fixture: ComponentFixture<AlexandreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlexandreComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlexandreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
