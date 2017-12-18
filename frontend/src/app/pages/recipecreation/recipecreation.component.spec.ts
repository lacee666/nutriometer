import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipecreationComponent } from './recipecreation.component';

describe('RecipecreationComponent', () => {
  let component: RecipecreationComponent;
  let fixture: ComponentFixture<RecipecreationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecipecreationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecipecreationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
