import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CreateTontinePage } from './create-tontine.page';

describe('CreateTontinePage', () => {
  let component: CreateTontinePage;
  let fixture: ComponentFixture<CreateTontinePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateTontinePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
