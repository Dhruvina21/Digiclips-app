import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SharedUtilitiesComponent } from './shared-utilities.component';

describe('SharedUtilitiesComponent', () => {
  let component: SharedUtilitiesComponent;
  let fixture: ComponentFixture<SharedUtilitiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SharedUtilitiesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SharedUtilitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
