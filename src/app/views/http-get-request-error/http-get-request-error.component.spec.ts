import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HttpGetRequestErrorComponent } from './http-get-request-error.component';

describe('HttpGetRequestErrorComponent', () => {
  let component: HttpGetRequestErrorComponent;
  let fixture: ComponentFixture<HttpGetRequestErrorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HttpGetRequestErrorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HttpGetRequestErrorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
