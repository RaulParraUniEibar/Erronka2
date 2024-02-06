import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Tab62Page } from './tab62.page';

describe('Tab62Page', () => {
  let component: Tab62Page;
  let fixture: ComponentFixture<Tab62Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Tab62Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
