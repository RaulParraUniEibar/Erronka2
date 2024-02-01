import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Tab45Page } from './tab45.page';

describe('Tab45Page', () => {
  let component: Tab45Page;
  let fixture: ComponentFixture<Tab45Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Tab45Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
