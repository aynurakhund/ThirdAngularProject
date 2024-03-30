import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthorProjectComponent } from './author-project.component';

describe('AuthorProjectComponent', () => {
  let component: AuthorProjectComponent;
  let fixture: ComponentFixture<AuthorProjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AuthorProjectComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AuthorProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
