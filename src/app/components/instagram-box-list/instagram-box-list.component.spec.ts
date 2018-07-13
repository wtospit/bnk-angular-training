import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InstagramBoxListComponent } from './instagram-box-list.component';
import { InstagramBoxComponent } from '../instagram-box/instagram-box.component';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('InstagramBoxListComponent', () => {
  let component: InstagramBoxListComponent;
  let fixture: ComponentFixture<InstagramBoxListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        InstagramBoxListComponent,
        InstagramBoxComponent
      ], imports: [
        RouterTestingModule,
        HttpClientTestingModule
      ]
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
