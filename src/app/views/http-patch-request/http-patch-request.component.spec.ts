import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HttpPatchRequestComponent } from './http-patch-request.component';

describe('HttpPatchRequestComponent', () => {
  let component: HttpPatchRequestComponent;
  let fixture: ComponentFixture<HttpPatchRequestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HttpPatchRequestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HttpPatchRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
