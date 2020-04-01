import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SharesAccountApplicationComponent } from './shares-account-application.component';

describe('SharesAccountApplicationComponent', () => {
  let component: SharesAccountApplicationComponent;
  let fixture: ComponentFixture<SharesAccountApplicationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SharesAccountApplicationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SharesAccountApplicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
