import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsComponent } from './detailes.component';

describe('DetailesComponent', () => {
  let component: DetailsComponent;
  let fixture: ComponentFixture<DetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetailsComponent]
    });
    fixture = TestBed.createComponent(DetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
