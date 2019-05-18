import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HttpDeleteRequestComponent } from './http-delete-request.component';

describe('HttpDeleteRequestComponent', () => {
  let component: HttpDeleteRequestComponent;
  let fixture: ComponentFixture<HttpDeleteRequestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HttpDeleteRequestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HttpDeleteRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
