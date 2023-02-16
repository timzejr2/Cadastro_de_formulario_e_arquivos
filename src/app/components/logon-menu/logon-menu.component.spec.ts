import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogonMenuComponent } from './logon-menu.component';

describe('LogonMenuComponent', () => {
  let component: LogonMenuComponent;
  let fixture: ComponentFixture<LogonMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LogonMenuComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LogonMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
