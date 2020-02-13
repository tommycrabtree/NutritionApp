/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { TeammateListComponent } from './teammate-list.component';

describe('TeammateListComponent', () => {
  let component: TeammateListComponent;
  let fixture: ComponentFixture<TeammateListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeammateListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeammateListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
