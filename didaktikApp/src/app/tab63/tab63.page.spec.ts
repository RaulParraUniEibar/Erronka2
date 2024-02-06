import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Tab63Page } from './tab63.page';

describe('Tab63Page', () => {
  let component: Tab63Page;
  let fixture: ComponentFixture<Tab63Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Tab63Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
