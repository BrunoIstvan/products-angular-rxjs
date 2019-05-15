import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HttpGetRequestComponent } from './http-get-request.component';

describe('HttpGetRequestComponent', () => {
  let component: HttpGetRequestComponent;
  let fixture: ComponentFixture<HttpGetRequestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HttpGetRequestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HttpGetRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
