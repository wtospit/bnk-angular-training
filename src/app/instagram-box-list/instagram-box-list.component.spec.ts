import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InstagramBoxListComponent } from './instagram-box-list.component';

describe('InstagramBoxListComponent', () => {
  let component: InstagramBoxListComponent;
  let fixture: ComponentFixture<InstagramBoxListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InstagramBoxListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InstagramBoxListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
