import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SecretCodePage } from './secret-code.page';

describe('SecretCodePage', () => {
  let component: SecretCodePage;
  let fixture: ComponentFixture<SecretCodePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(SecretCodePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
