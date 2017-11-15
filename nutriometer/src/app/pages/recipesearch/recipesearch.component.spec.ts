import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipesearchComponent } from './recipesearch.component';

describe('RecipesearchComponent', () => {
  let component: RecipesearchComponent;
  let fixture: ComponentFixture<RecipesearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecipesearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecipesearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
