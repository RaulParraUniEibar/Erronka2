import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Tab42Page } from './tab42.page';

describe('Tab42Page', () => {
  let component: Tab42Page;
  let fixture: ComponentFixture<Tab42Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Tab42Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
