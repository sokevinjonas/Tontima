import { ComponentFixture, TestBed } from '@angular/core/testing';
import { InvitedPersonPage } from './invited-person.page';

describe('InvitedPersonPage', () => {
  let component: InvitedPersonPage;
  let fixture: ComponentFixture<InvitedPersonPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(InvitedPersonPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
