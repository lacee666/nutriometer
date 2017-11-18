import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodcontentComponent } from './foodcontent.component';

describe('FoodcontentComponent', () => {
  let component: FoodcontentComponent;
  let fixture: ComponentFixture<FoodcontentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FoodcontentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FoodcontentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
