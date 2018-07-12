import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InstagramBoxComponent } from './instagram-box.component';

describe('InstagramBoxComponent', () => {
  let component: InstagramBoxComponent;
  let fixture: ComponentFixture<InstagramBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InstagramBoxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InstagramBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
