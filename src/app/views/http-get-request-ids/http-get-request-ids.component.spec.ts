import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HttpGetRequestIdsComponent } from './http-get-request-ids.component';

describe('HttpGetRequestIdsComponent', () => {
  let component: HttpGetRequestIdsComponent;
  let fixture: ComponentFixture<HttpGetRequestIdsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HttpGetRequestIdsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HttpGetRequestIdsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
