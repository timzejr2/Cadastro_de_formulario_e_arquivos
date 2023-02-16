import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserModelCardComponent } from './user-model-card.component';

describe('UserModelCardComponent', () => {
  let component: UserModelCardComponent;
  let fixture: ComponentFixture<UserModelCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserModelCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserModelCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
