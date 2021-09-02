import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountsdisplayComponent } from './accountsdisplay.component';

describe('AccountsdisplayComponent', () => {
  let component: AccountsdisplayComponent;
  let fixture: ComponentFixture<AccountsdisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccountsdisplayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountsdisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
