import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DetailMembersPage } from './detail-members.page';

describe('DetailMembersPage', () => {
  let component: DetailMembersPage;
  let fixture: ComponentFixture<DetailMembersPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailMembersPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
