import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Tab61Page } from './tab61.page';

describe('Tab61Page', () => {
  let component: Tab61Page;
  let fixture: ComponentFixture<Tab61Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Tab61Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
