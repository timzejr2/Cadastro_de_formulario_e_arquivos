import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogoffMenuComponent } from './logoff-menu.component';

describe('LogoffMenuComponent', () => {
  let component: LogoffMenuComponent;
  let fixture: ComponentFixture<LogoffMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LogoffMenuComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LogoffMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
