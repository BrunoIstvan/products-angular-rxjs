import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HttpGetRequestLoadingComponent } from './http-get-request-loading.component';

describe('HttpGetRequestLoadingComponent', () => {
  let component: HttpGetRequestLoadingComponent;
  let fixture: ComponentFixture<HttpGetRequestLoadingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HttpGetRequestLoadingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HttpGetRequestLoadingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
