import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ContinueWithEmailPage } from './continue-with-email.page';

describe('ContinueWithEmailPage', () => {
  let component: ContinueWithEmailPage;
  let fixture: ComponentFixture<ContinueWithEmailPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ContinueWithEmailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
