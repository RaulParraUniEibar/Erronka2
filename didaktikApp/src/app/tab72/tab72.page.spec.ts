import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Tab72Page } from './tab72.page';

describe('Tab72Page', () => {
  let component: Tab72Page;
  let fixture: ComponentFixture<Tab72Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Tab72Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
